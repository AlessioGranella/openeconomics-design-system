/* OE Charts — motore grafici del design system OpenEconomics (v0.6.0).
   Nessuna dipendenza: disegna SVG a runtime, si apre anche da file://.

   USO
     <div class="oe-fig">
       <div class="oe-fig__head">
         <span class="oe-figure-label">Grafico 1</span>
         <p class="oe-fig__title">Che cosa mostra il grafico</p>
       </div>
       <div data-oe-chart="chiave"></div>
     </div>
     <script>window.OE_DATA = { chiave: { type: 'hbars', ... } };</script>
     <script src="oe-charts.js" defer></script>

   Al caricamento monta ogni [data-oe-chart] leggendo window.OE_DATA.
   Da codice: OECharts.render(host, spec) · OECharts.mount(root, data).

   TIPI — hbars · columns · line · compare · waterfall · donut · map · grid ·
          treemap · sunburst · sankey   (scheda «Grafici» della libreria)

   VISTE — ogni spec può avere views:[{key,label}] + data:{key: {...}} e
   controlLabel: compare un controllo segmentato che cambia vista.

   COLORI — dai token --oe-chart-* (colors_and_type.css), letti sull'elemento
   del grafico: sotto .theme-civiqa diventano blu Civiqa da soli. Una sola
   tinta per grafico; magenta solo per i costi, grigio solo per «Altro».
   NUMERI — locale it-IT, migliaia «.», decimali «,», useGrouping always. */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var VERSION = '0.6.0';
  var FALLBACK = {
    '--oe-chart-1': '#270065', '--oe-chart-2': '#5902EE', '--oe-chart-3': '#B991FF',
    '--oe-chart-seq-1': '#EFE5FF', '--oe-chart-seq-2': '#D9C1FF', '--oe-chart-seq-3': '#B991FF',
    '--oe-chart-seq-4': '#8742FF', '--oe-chart-seq-5': '#5902EE', '--oe-chart-seq-6': '#4400B3',
    '--oe-chart-seq-7': '#270065', '--oe-chart-accent': '#4400B3', '--oe-chart-cost': '#C300C3',
    '--oe-chart-other': '#AFAFAF', '--oe-chart-ink': '#000000', '--oe-chart-muted': '#6E6E6E',
    '--oe-chart-hair': '#E7E7E7'
  };
  // palette corrente: impostata da render() leggendo i token sull'host
  var RAMP3, SEQ, ACC, DEEP, SOFT, COST, OTHER, INK, MUTED, HAIR;
  function setPalette(host) {
    var cs = window.getComputedStyle ? getComputedStyle(host) : null;
    function t(name) {
      var v = cs ? cs.getPropertyValue(name).trim() : '';
      return v || FALLBACK[name];
    }
    RAMP3 = [t('--oe-chart-1'), t('--oe-chart-2'), t('--oe-chart-3')];
    SEQ = [1, 2, 3, 4, 5, 6, 7].map(function (i) { return t('--oe-chart-seq-' + i); });
    ACC = t('--oe-chart-accent'); DEEP = RAMP3[0]; SOFT = RAMP3[2];
    COST = t('--oe-chart-cost'); OTHER = t('--oe-chart-other');
    INK = t('--oe-chart-ink'); MUTED = t('--oe-chart-muted'); HAIR = t('--oe-chart-hair');
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- utilità ---------- */
  function fmt(v, dec) {
    if (v === null || v === undefined || v === '') return '';
    return new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0, useGrouping: 'always'
    }).format(v);
  }
  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function txt(parent, x, y, s, attrs) {
    var t = el('text', Object.assign({ x: x, y: y }, attrs || {}), parent);
    t.textContent = s;
    return t;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function sum(a) { return a.reduce(function (x, y) { return x + (y || 0); }, 0); }
  function isOther(label) { return /^altr[oei]\b/i.test(String(label)); }
  /* palette per n serie: 1 → accento; 2 → scuro + chiaro; 3 → rampa ordinale */
  function palette(n) { return n >= 3 ? RAMP3 : n === 2 ? [ACC, SOFT] : [ACC]; }
  /* palette categoriale a una tinta, dal più scuro: per ciambelle e colonne con >3 voci */
  function ramp(n) {
    if (n <= 3) return RAMP3.slice(0, n);
    var src = [SEQ[6], SEQ[5], SEQ[4], SEQ[3], SEQ[2], SEQ[1]];
    var out = [];
    for (var i = 0; i < n; i++) out.push(src[Math.round(i * (src.length - 1) / Math.max(1, n - 1))]);
    return out;
  }
  function seqColor(t, from) {   // t ∈ [0,1] → passo della scala sequenziale
    var a = from || 0;
    return SEQ[Math.min(SEQ.length - 1, Math.round(a + t * (SEQ.length - 1 - a)))];
  }
  function niceStep(max, n) {
    var raw = max / (n || 4), mag = Math.pow(10, Math.floor(Math.log10(raw || 1)));
    var r = raw / mag, s = r <= 1 ? 1 : r <= 2 ? 2 : r <= 2.5 ? 2.5 : r <= 5 ? 5 : 10;
    return s * mag;
  }
  function view(spec, key) { return spec.data && key !== undefined && key !== null ? spec.data[key] : spec; }
  function opt(v, spec, k, d) { return v[k] !== undefined ? v[k] : spec[k] !== undefined ? spec[k] : d; }
  function footer(svg, x, y, unit, source) {
    if (unit) { txt(svg, x, y, unit, { 'font-size': 11.5, fill: MUTED }); y += 20; }
    if (source) { txt(svg, 0, y + 4, source, { 'font-size': 10.5, fill: MUTED, class: 'oe-src' }); y += 20; }
    return y;
  }
  function legend(svg, names, colors, x, y) {
    names.forEach(function (name, i) {
      var g = el('g', { class: 'oe-lg', 'data-series': i, tabindex: '0' }, svg);
      el('rect', { x: x, y: y - 10, width: 12, height: 12, fill: colors[i] }, g);
      txt(g, x + 18, y, name, { 'font-size': 12.5, fill: MUTED });
      x += 30 + name.length * 7.2;
    });
  }

  /* ---------- tooltip ---------- */
  var tip = null;
  function tipEl() {
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'oe-tip';
      tip.setAttribute('role', 'status');
      document.body.appendChild(tip);
    }
    return tip;
  }
  function showTip(html, x, y) {
    var t = tipEl();
    t.innerHTML = html;
    t.classList.add('is-on');
    var r = t.getBoundingClientRect();
    var left = Math.min(Math.max(8, x + 14), window.innerWidth - r.width - 8);
    var top = y - r.height - 14;
    if (top < 8) top = y + 18;
    t.style.transform = 'translate(' + Math.round(left) + 'px,' + Math.round(top) + 'px)';
  }
  function hideTip() { if (tip) tip.classList.remove('is-on'); }
  function tipHTML(title, sub, rowsArr) {
    var h = '<div class="oe-tip__t">' + esc(title) + '</div>';
    if (sub) h += '<div class="oe-tip__s">' + esc(sub) + '</div>';
    (rowsArr || []).forEach(function (r) {
      h += '<div class="oe-tip__r"><span class="oe-tip__k">' +
        (r[2] ? '<i style="background:' + r[2] + '"></i>' : '') + esc(r[0]) +
        '</span><b>' + esc(r[1]) + '</b></div>';
    });
    return h;
  }

  /* ================================================================
     hbars — barre orizzontali, impilate (default) o raggruppate
     spec: series[], rows:[{label, values[], tip?, extra?:[[k,v]]}], unit, dec,
           labelW, mode:'stacked'|'grouped'
     ================================================================ */
  function hbars(host, spec, key) {
    var v = view(spec, key);
    var W = spec.width || 920, rows = v.rows, series = v.series || spec.series || ['Valore'];
    var unit = opt(v, spec, 'unit', ''), dec = opt(v, spec, 'dec', 0);
    var grouped = opt(v, spec, 'mode', 'stacked') === 'grouped' && series.length > 1;
    var pal = palette(series.length);
    var labelW = spec.labelW || 220, barH = grouped ? 14 : 22, gap = 13, valW = 92;
    var rowH = grouped ? series.length * (barH + 3) - 3 : barH;
    var y = 6, plotW = W - labelW - valW;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' 10', class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico a barre');
    if (series.length > 1) { legend(svg, series, pal, labelW, y + 12); y += 30; }
    var top = y, max = 0;
    rows.forEach(function (r) {
      max = Math.max(max, grouped ? Math.max.apply(null, r.values.map(function (x) { return x || 0; })) : sum(r.values));
    });
    if (!max) max = 1;
    rows.forEach(function (r, i) {
      var by = top + i * (rowH + gap), total = sum(r.values);
      var g = el('g', { class: 'oe-row', tabindex: '0', role: 'listitem' }, svg);
      g.__tip = function () {
        var list = series.length > 1 ? series.map(function (s, j) { return [s, fmt(r.values[j], dec), pal[j]]; }) : [];
        (r.extra || []).forEach(function (e) { list.push([e[0], typeof e[1] === 'number' ? fmt(e[1], dec) : e[1]]); });
        if (!grouped) list.push(['Totale', fmt(total, dec)]);
        return tipHTML(r.label, r.tip || unit, list);
      };
      txt(g, labelW - 14, by + rowH / 2 + 4.5, r.label,
        { 'font-size': 13, 'text-anchor': 'end', fill: INK, class: 'oe-lab' });
      if (grouped) {
        r.values.forEach(function (val, j) {
          var w = Math.max(1, (val || 0) / max * plotW), yy = by + j * (barH + 3);
          var rect = el('rect', { x: labelW, y: yy, height: barH, width: w, fill: pal[j], 'data-series': j, class: 'oe-bar' }, g);
          rect.style.width = w + 'px';
          txt(g, labelW + w + 8, yy + barH - 3, fmt(val, dec), { 'font-size': 12.5, fill: INK, class: 'oe-val' });
        });
      } else {
        var x = labelW;
        r.values.forEach(function (val, j) {
          if (!val) return;
          var w = Math.max(1, val / max * plotW);
          var last = j === r.values.length - 1 || r.values.slice(j + 1).every(function (n) { return !n; });
          var ww = Math.max(1, w - (last ? 0 : 2));
          var rect = el('rect', { x: x, y: by, height: barH, width: ww, fill: r.color || pal[j], 'data-series': j, class: 'oe-bar' }, g);
          rect.style.width = ww + 'px';
          x += w;
        });
        txt(g, labelW + (total / max) * plotW + 10, by + barH * 0.75, fmt(total, dec),
          { 'font-size': 15, fill: INK, class: 'oe-val' });
      }
    });
    y = top + rows.length * (rowH + gap) + 2;
    y = footer(svg, labelW, y + 10, unit, spec.source);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + Math.round(y + 4));
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     columns — colonne verticali, raggruppate o impilate (serie storiche,
     confronti per categoria). NUOVO in v0.6.0
     spec: series[], rows:[{label, values[]}], mode:'grouped'|'stacked',
           unit, dec, height, showValues (default true)
     ================================================================ */
  function columns(host, spec, key) {
    var v = view(spec, key);
    var W = spec.width || 920, rows = v.rows, series = v.series || spec.series || ['Valore'];
    var unit = opt(v, spec, 'unit', ''), dec = opt(v, spec, 'dec', 0);
    var stacked = opt(v, spec, 'mode', 'grouped') === 'stacked';
    var pal = series.length === 1 && rows.some(function (r) { return r.highlight; }) ? [SOFT] : palette(series.length);
    var H = spec.height || 300, left = 56, right = 12;
    var top = series.length > 1 ? 44 : 24, base = top + H;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (base + 100), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico a colonne');
    if (series.length > 1) legend(svg, series, pal, left, 16);
    var max = 0;
    rows.forEach(function (r) {
      max = Math.max(max, stacked ? sum(r.values) : Math.max.apply(null, r.values.map(function (x) { return x || 0; })));
    });
    var step = niceStep(max * 1.08, 4), ymax = Math.ceil(max * 1.08 / step) * step || 1;
    for (var t = 0; t <= ymax + 1e-9; t += step) {
      var yy = base - t / ymax * H;
      el('line', { x1: left, x2: W - right, y1: yy, y2: yy, stroke: HAIR }, svg);
      txt(svg, left - 8, yy + 4, fmt(t, step < 1 ? 1 : 0), { 'font-size': 11, fill: MUTED, 'text-anchor': 'end', class: 'oe-val' });
    }
    var slot = (W - left - right) / rows.length;
    var groupW = Math.min(slot * 0.72, stacked ? 90 : 40 * series.length);
    var bw = stacked ? groupW : groupW / series.length;
    var showV = spec.showValues !== false;
    rows.forEach(function (r, i) {
      var gx = left + i * slot + (slot - groupW) / 2;
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        var list = series.length > 1 ? series.map(function (s, j) { return [s, fmt(r.values[j], dec), pal[j]]; }) : [['Valore', fmt(r.values[0], dec)]];
        if (stacked && series.length > 1) list.push(['Totale', fmt(sum(r.values), dec)]);
        return tipHTML(r.label, r.tip || unit, list);
      };
      var acc = 0;
      r.values.forEach(function (val, j) {
        var h = (val || 0) / ymax * H;
        var x = stacked ? gx : gx + j * bw, y0 = stacked ? base - (acc + (val || 0)) / ymax * H : base - h;
        var col = series.length === 1 && r.highlight ? ACC : pal[j];
        el('rect', { x: x + (stacked ? 0 : 1), y: y0, width: Math.max(1, bw - (stacked ? 0 : 2)),
          height: Math.max(0, h - (stacked && j < r.values.length - 1 ? 1.5 : 0)), fill: col, 'data-series': j, class: 'oe-bar' }, g);
        if (showV && !stacked && bw >= 26)
          txt(g, x + bw / 2, y0 - 6, fmt(val, dec), { 'font-size': 11.5, 'text-anchor': 'middle', fill: INK, class: 'oe-val' });
        acc += val || 0;
      });
      if (showV && stacked)
        txt(g, gx + groupW / 2, base - acc / ymax * H - 7, fmt(acc, dec), { 'font-size': 13, 'text-anchor': 'middle', fill: INK, class: 'oe-val' });
      txt(g, left + i * slot + slot / 2, base + 20, r.label, { 'font-size': 12.5, 'text-anchor': 'middle', fill: INK, class: 'oe-lab' });
    });
    el('line', { x1: left, x2: W - right, y1: base, y2: base, stroke: MUTED }, svg);
    var y = footer(svg, left, base + 50, unit, spec.source);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + Math.round(y + 4));
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     line — linee (o aree) su categorie ordinate, di norma anni. NUOVO in v0.6.0
     spec: categories[], series:[{label, values[]}], unit, dec, area:boolean,
           height, zero (default true: l'asse parte da 0)
     Valore a fine linea (con una serie sola anche il nome); guida verticale e tooltip con tutte le serie.
     ================================================================ */
  function line(host, spec, key) {
    var v = view(spec, key);
    var W = spec.width || 920, cats = v.categories || spec.categories, series = v.series;
    var unit = opt(v, spec, 'unit', ''), dec = opt(v, spec, 'dec', 0), area = opt(v, spec, 'area', false);
    var pal = palette(series.length);
    var H = spec.height || 280, left = 56, right = series.length > 1 ? 72 : 170, top = series.length > 1 ? 44 : 24, base = top + H;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (base + 100), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico a linee');
    if (series.length > 1) legend(svg, series.map(function (s) { return s.label; }), pal, left, 16);
    var all = [];
    series.forEach(function (s) { s.values.forEach(function (x) { if (x !== null && x !== undefined) all.push(x); }); });
    var lo = opt(v, spec, 'zero', true) ? Math.min(0, Math.min.apply(null, all)) : Math.min.apply(null, all);
    var hi = Math.max.apply(null, all);
    var step = niceStep((hi - lo) * 1.08, 4);
    var y0 = Math.floor(lo / step) * step, y1 = Math.ceil(hi * 1.04 / step) * step;
    if (y1 === y0) y1 = y0 + step;
    function Y(val) { return base - (val - y0) / (y1 - y0) * H; }
    var plotW = W - left - right, n = cats.length;
    function X(i) { return left + (n === 1 ? plotW / 2 : i * plotW / (n - 1)); }
    for (var t = y0; t <= y1 + 1e-9; t += step) {
      el('line', { x1: left, x2: left + plotW, y1: Y(t), y2: Y(t), stroke: HAIR }, svg);
      txt(svg, left - 8, Y(t) + 4, fmt(t, step < 1 ? 1 : 0), { 'font-size': 11, fill: MUTED, 'text-anchor': 'end', class: 'oe-val' });
    }
    var every = Math.max(1, Math.ceil(n / 12));
    cats.forEach(function (c, i) {
      if (i % every === 0 || i === n - 1)
        txt(svg, X(i), base + 20, c, { 'font-size': 12, 'text-anchor': 'middle', fill: INK });
    });
    var guide = el('line', { x1: 0, x2: 0, y1: top, y2: base, stroke: MUTED, 'stroke-dasharray': '3 3', opacity: 0 }, svg);
    series.forEach(function (s, j) {
      var pts = [];
      s.values.forEach(function (val, i) { if (val !== null && val !== undefined) pts.push([X(i), Y(val)]); });
      var d = pts.map(function (p, k) { return (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
      var g = el('g', { 'data-series': j, class: 'oe-series' }, svg);
      if (area && pts.length)
        el('path', { d: d + ' L' + pts[pts.length - 1][0].toFixed(1) + ' ' + Y(Math.max(y0, 0)).toFixed(1) +
          ' L' + pts[0][0].toFixed(1) + ' ' + Y(Math.max(y0, 0)).toFixed(1) + ' Z',
          fill: pal[j], 'fill-opacity': series.length > 1 ? 0.14 : 0.18, class: 'oe-bar', 'data-series': j }, g);
      el('path', { d: d, fill: 'none', stroke: pal[j], 'stroke-width': 2.5, 'stroke-linejoin': 'round',
        'stroke-linecap': 'round', class: 'oe-bar oe-line', 'data-series': j }, g);
      pts.forEach(function (p) { el('circle', { cx: p[0], cy: p[1], r: n > 24 ? 0 : 3.5, fill: '#fff', stroke: pal[j], 'stroke-width': 2, class: 'oe-bar', 'data-series': j }, g); });
      var lp = pts[pts.length - 1];
      // a fine linea: con la legenda basta il valore; con una serie sola, nome e valore
      if (lp) txt(g, lp[0] + 10, lp[1] + 4, (series.length > 1 ? '' : s.label + ' ') + fmt(s.values[s.values.length - 1], dec),
        { 'font-size': 12.5, fill: pal[j] === SOFT ? INK : pal[j], class: 'oe-val' });
    });
    // fasce invisibili per il tooltip: una per categoria
    cats.forEach(function (c, i) {
      var half = n === 1 ? plotW / 2 : plotW / (n - 1) / 2;
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        guide.setAttribute('x1', X(i)); guide.setAttribute('x2', X(i)); guide.setAttribute('opacity', 1);
        return tipHTML(c, unit, series.map(function (s, j) { return [s.label, fmt(s.values[i], dec), pal[j]]; }));
      };
      el('rect', { x: X(i) - half, y: top, width: half * 2, height: H, fill: 'transparent' }, g);
    });
    svg.addEventListener('pointerleave', function () { guide.setAttribute('opacity', 0); });
    el('line', { x1: left, x2: left + plotW, y1: base, y2: base, stroke: MUTED }, svg);
    var y = footer(svg, left, base + 50, unit, spec.source);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + Math.round(y + 4));
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     compare — due o tre valori a confronto (moltiplicatori): colonne larghe,
     cifra display in Hedvig. spec: items:[{label, value, note?, highlight?, tip?}]
     ================================================================ */
  function compare(host, spec) {
    var W = spec.width || 920;
    var items = spec.items, H = 200, top = 40, base = top + H;
    var max = Math.max.apply(null, items.map(function (i) { return i.value; })) * 1.18;
    var slot = (W - 60) / items.length, bw = Math.min(210, slot * 0.5);
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (base + 110), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Confronto');
    items.forEach(function (it, i) {
      var x = 30 + i * slot + (slot - bw) / 2, h = it.value / max * H;
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        return tipHTML(it.label, it.note, [[spec.valueLabel || 'Moltiplicatore', fmt(it.value, spec.dec)],
          ['', it.tip || '']].filter(function (r) { return r[1]; }));
      };
      el('rect', { x: x, width: bw, y: base - h, height: h, fill: it.highlight ? ACC : SOFT, class: 'oe-bar' }, g);
      txt(g, x + bw / 2, base - h - 14, fmt(it.value, spec.dec),
        { 'font-size': 34, 'text-anchor': 'middle', fill: INK, class: 'oe-val oe-val--display' });
      txt(g, x + bw / 2, base + 26, it.label, { 'font-size': 14, 'text-anchor': 'middle', fill: INK });
      if (it.note) txt(g, x + bw / 2, base + 46, it.note, { 'font-size': 12, 'text-anchor': 'middle', fill: MUTED });
    });
    el('line', { x1: 30, y1: base, x2: W - 30, y2: base, stroke: HAIR }, svg);
    footer(svg, 30, base + 70, spec.unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     waterfall — dal lordo al netto. steps:[{label, value, kind:'start'|'delta'|'total', tip?}]
     I delta negativi usano il colore costo (magenta).
     ================================================================ */
  function waterfall(host, spec) {
    var W = spec.width || 920, dec = spec.dec !== undefined ? spec.dec : 2;
    var H = 220, top = 46, base = top + H, run = 0, items = [];
    spec.steps.forEach(function (s) {
      if (s.kind === 'total') items.push({ s: s, a: 0, b: s.value });
      else { var st = run; run += s.value; items.push({ s: s, a: st, b: run }); }
    });
    var max = 0;
    items.forEach(function (i) { max = Math.max(max, Math.abs(i.a), Math.abs(i.b)); });
    max *= 1.15;
    var slot = (W - 60) / items.length, bw = Math.min(200, slot * 0.52);
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (base + 90), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico a cascata');
    items.forEach(function (it, i) {
      var x = 30 + i * slot + (slot - bw) / 2;
      var lo = it.s.kind === 'total' ? 0 : Math.min(it.a, it.b);
      var hi = it.s.kind === 'total' ? it.b : Math.max(it.a, it.b);
      var yt = base - hi / max * H, yb = base - lo / max * H;
      var col = it.s.kind === 'total' ? DEEP : (it.b < it.a ? COST : ACC);
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        return tipHTML(it.s.label, it.s.tip, [['Valore', fmt(it.s.value, dec) + (spec.suffix || '')]]);
      };
      el('rect', { x: x, width: bw, y: yt, height: Math.max(3, yb - yt), fill: col, class: 'oe-bar' }, g);
      txt(g, x + bw / 2, yt - 13, fmt(it.s.value, dec),
        { 'font-size': 30, 'text-anchor': 'middle', fill: INK, class: 'oe-val oe-val--display' });
      txt(g, x + bw / 2, base + 26, it.s.label, { 'font-size': 14, 'text-anchor': 'middle', fill: INK });
      if (i < items.length - 1)
        el('line', { x1: x + bw, y1: base - it.b / max * H, x2: x + slot, y2: base - it.b / max * H,
          stroke: HAIR, 'stroke-dasharray': '3 3' }, svg);
    });
    el('line', { x1: 30, y1: base, x2: W - 30, y2: base, stroke: HAIR }, svg);
    footer(svg, 30, base + 50, spec.unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     map — cartogramma con classifica sincronizzata
     spec: paths:{nome: d}, viewBox, rankTop?, a11y?
           data:{vista: {unit, dec, regions:[{name, value, parts:[[k,v]]}]}}
     I path si generano una volta sola da GeoJSON (vedi la scheda «Grafici»).
     ================================================================ */
  function map(host, spec, key) {
    var v = view(spec, key);
    if (!v.regions && spec.data) v = spec.data[Object.keys(spec.data)[0]];
    var vals = v.regions.map(function (r) { return r.value; });
    var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
    function col(x) { return seqColor(Math.pow((x - lo) / (hi - lo || 1), 0.42)); }
    var wrap = document.createElement('div');
    wrap.className = 'oe-map';
    var svg = el('svg', { viewBox: spec.viewBox, class: 'oe-chart oe-map__svg', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Cartogramma');
    var list = document.createElement('ol');
    list.className = 'oe-rank';
    v.regions.forEach(function (r) {
      var p = el('path', { d: spec.paths[r.name], fill: col(r.value), stroke: '#fff', 'stroke-width': 0.9,
        class: 'oe-region', tabindex: '0', 'data-r': r.name }, svg);
      p.__tip = function () {
        var rowsArr = (r.parts || []).map(function (q) { return [q[0], fmt(q[1], v.dec)]; });
        rowsArr.push(['Totale', fmt(r.value, v.dec)]);
        return tipHTML(r.name, v.unit, rowsArr);
      };
      function on() { p.classList.add('is-on'); if (li) li.classList.add('is-on'); }
      function off() { p.classList.remove('is-on'); if (li) li.classList.remove('is-on'); }
      var li = null;
      if (!spec.rankTop || list.children.length < spec.rankTop) {
        li = document.createElement('li');
        li.className = 'oe-rank__i';
        li.innerHTML = '<i style="background:' + col(r.value) + '"></i><span>' + esc(r.name) +
          '</span><b class="oe-num">' + fmt(r.value, v.dec) + '</b>';
        list.appendChild(li);
        li.addEventListener('pointerenter', function (e) { on(); showTip(p.__tip(), e.clientX, e.clientY); });
        li.addEventListener('pointermove', function (e) { showTip(p.__tip(), e.clientX, e.clientY); });
        li.addEventListener('pointerleave', function () { off(); hideTip(); });
      }
      p.addEventListener('pointerenter', on); p.addEventListener('pointerleave', off);
      p.addEventListener('focus', on); p.addEventListener('blur', off);
    });
    var foot = document.createElement('p');
    foot.className = 'oe-chart__foot';
    foot.innerHTML = '<span>' + esc(v.unit || '') + '</span><span class="oe-src">' + esc(spec.source || '') + '</span>';
    wrap.appendChild(svg); wrap.appendChild(list);
    host.appendChild(wrap); host.appendChild(foot);
    wire(svg);
  }

  /* ================================================================
     donut — ciambella con legenda a destra
     spec: items:[{label, value, suffix?, sub?}], unit, dec, colors?
     >3 voci: rampa a una tinta dal più scuro; «Altro» sempre in grigio.
     ================================================================ */
  function donut(host, spec, key) {
    var v = view(spec, key);
    var items = v.items, dec = opt(v, spec, 'dec', 1), unit = opt(v, spec, 'unit', '');
    var base = v.colors || spec.colors || ramp(items.filter(function (i) { return !isOther(i.label); }).length);
    var k = 0, pal = items.map(function (it) { return isOther(it.label) && !(v.colors || spec.colors) ? OTHER : base[k++ % base.length]; });
    var W = spec.width || 920, r = 120, ri = 72, cx = 180, cy = 24 + r;
    var tot = sum(items.map(function (i) { return i.value; })) || 1;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + Math.max(cy + r + 70, 30 + items.length * 26 + 70), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico ad anello');
    var ang = -Math.PI / 2;
    items.forEach(function (it, i) {
      var a2 = ang + 2 * Math.PI * it.value / tot, large = (a2 - ang) > Math.PI ? 1 : 0;
      var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      var x3 = cx + ri * Math.cos(a2), y3 = cy + ri * Math.sin(a2), x4 = cx + ri * Math.cos(ang), y4 = cy + ri * Math.sin(ang);
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        return tipHTML(it.label, it.sub || unit, [['Valore', fmt(it.value, dec) + (it.suffix || '')],
          ['Quota', fmt(it.value / tot * 100, 1) + '%']]);
      };
      el('path', { d: 'M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' +
        x2.toFixed(1) + ' ' + y2.toFixed(1) + ' L' + x3.toFixed(1) + ' ' + y3.toFixed(1) +
        ' A' + ri + ' ' + ri + ' 0 ' + large + ' 0 ' + x4.toFixed(1) + ' ' + y4.toFixed(1) + ' Z',
        fill: pal[i], stroke: '#fff', 'stroke-width': 2, class: 'oe-bar' }, g);
      ang = a2;
    });
    var ly = 34, lx = cx + r + 56;
    items.forEach(function (it, i) {
      el('rect', { x: lx, y: ly - 10, width: 11, height: 11, fill: pal[i] }, svg);
      txt(svg, lx + 18, ly, it.label, { 'font-size': 13.5, fill: INK });
      txt(svg, W - 8, ly, fmt(it.value, dec) + (it.suffix || ''), { 'font-size': 14, 'text-anchor': 'end', fill: INK, class: 'oe-val' });
      ly += 26;
    });
    footer(svg, 0, Math.max(cy + r + 24, ly + 6), unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     grid — matrice a bolle (righe × colonne, es. regione × settore)
     spec/vista: rows[], cols[], values[][], unit, dec, parts?[][][]
           partLabels?, rowH?, maxR?
     Intestazioni orizzontali se le colonne sono larghe, altrimenti ruotate;
     la testata si adatta all'etichetta più lunga.
     ================================================================ */
  function grid(host, spec, key) {
    var v = view(spec, key);
    var rows = v.rows, cols = v.cols, m = v.values, dec = v.dec || 0;
    var W = spec.width || 920, left = 150, cw = (W - left - 10) / cols.length, ch = spec.rowH || 24;
    var flat = cw >= 120, perLine = Math.floor((cw - 12) / 6.4);
    var longest = Math.max.apply(null, cols.map(function (c) { return c.length; }));
    var top = flat ? 52 : Math.round(longest * 6.2 * 0.77 + 30);
    var maxR = spec.maxR || (Math.min(cw, ch) / 2 - 2);
    var max = 0;
    m.forEach(function (r) { r.forEach(function (x) { if (x > max) max = x; }); });
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (top + rows.length * ch + 60), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Matrice a bolle');
    cols.forEach(function (c, j) {
      var x = left + j * cw + cw / 2;
      if (flat) {
        var lines = [''];
        c.split(' ').forEach(function (w) {
          var cur = lines[lines.length - 1];
          if (cur && (cur + ' ' + w).length > perLine && lines.length < 2) lines.push(w);
          else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
        });
        lines.forEach(function (l, k) {
          txt(svg, x, top - 16 - (lines.length - 1 - k) * 15, l, { 'font-size': 12, fill: MUTED, 'text-anchor': 'middle' });
        });
      } else {
        var t = txt(svg, x, top - 12, c, { 'font-size': 11, fill: MUTED, 'text-anchor': 'start' });
        t.setAttribute('transform', 'rotate(-50 ' + x + ' ' + (top - 12) + ')');
      }
    });
    rows.forEach(function (rname, i) {
      var y = top + i * ch;
      txt(svg, left - 10, y + ch / 2 + 4, rname, { 'font-size': 11.5, 'text-anchor': 'end', fill: INK });
      cols.forEach(function (c, j) {
        var val = m[i][j] || 0;
        if (!val) return;
        var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
        g.__tip = function () {
          var pp = v.parts && v.parts[i] && v.parts[i][j];
          var list = pp ? (spec.partLabels || ['Diretto', 'Indiretto', 'Indotto'])
            .map(function (n, k) { return [n, fmt(pp[k], dec), RAMP3[k]]; }) : [];
          list.push([pp ? 'Totale' : 'Valore', fmt(val, dec)]);
          return tipHTML(rname + ' · ' + c, v.unit, list);
        };
        el('circle', { cx: left + j * cw + cw / 2, cy: y + ch / 2, r: Math.max(1.6, Math.sqrt(val / max) * maxR),
          fill: ACC, 'fill-opacity': 0.85, class: 'oe-bar' }, g);
      });
    });
    footer(svg, 0, top + rows.length * ch + 22, v.unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     treemap — rettangoli proporzionali (squarified)
     spec/vista: items:[{label, value, sub?, parts?:[[k,v]]}], unit, height
     ================================================================ */
  function squarify(items, x, y, w, h, out) {
    if (!items.length) return;
    if (items.length === 1) { out.push({ it: items[0], x: x, y: y, w: w, h: h }); return; }
    var total = sum(items.map(function (i) { return i.value; }));
    var acc = 0, best = Infinity, split = 1, horizontal = w >= h;
    for (var i = 0; i < items.length; i++) {
      acc += items[i].value;
      var side = (horizontal ? w : h) * acc / total, other = horizontal ? h : w, worst = 0;
      for (var k = 0; k <= i; k++) {
        var seg = other * (items[k].value / acc);
        worst = Math.max(worst, Math.max(side / seg, seg / side));
      }
      if (worst > best) break;
      best = worst; split = i + 1;
    }
    var head = items.slice(0, split), tail = items.slice(split);
    var frac = sum(head.map(function (i) { return i.value; })) / total, headSum = frac * total;
    if (horizontal) {
      var ww = w * frac, yy = y;
      head.forEach(function (it) { var hh = h * (it.value / headSum); out.push({ it: it, x: x, y: yy, w: ww, h: hh }); yy += hh; });
      squarify(tail, x + ww, y, w - ww, h, out);
    } else {
      var hh2 = h * frac, xx = x;
      head.forEach(function (it) { var w2 = w * (it.value / headSum); out.push({ it: it, x: xx, y: y, w: w2, h: hh2 }); xx += w2; });
      squarify(tail, x, y + hh2, w, h - hh2, out);
    }
  }
  function treemap(host, spec, key) {
    var v = view(spec, key);
    var items = v.items.slice().sort(function (a, b) { return b.value - a.value; });
    var W = spec.width || 920, H = v.height || spec.height || 520, unit = opt(v, spec, 'unit', '');
    var dec = opt(v, spec, 'dec', 1), cells = [];
    squarify(items, 0, 0, W, H, cells);
    var max = items[0].value;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (H + 56), class: 'oe-chart', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Treemap');
    function fit(s, w) {
      var n = Math.floor((w - 18) / 6.3);
      return s.length > n ? (n > 3 ? s.slice(0, n - 1) + '…' : '') : s;
    }
    cells.forEach(function (c) {
      var idx = Math.min(SEQ.length - 1, Math.round(1 + Math.pow(c.it.value / max, 0.45) * (SEQ.length - 2)));
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        var list = (c.it.parts || []).map(function (p) { return [p[0], fmt(p[1], dec)]; });
        list.push(['Totale', fmt(c.it.value, dec)]);
        return tipHTML(c.it.label, c.it.sub || unit, list);
      };
      el('rect', { x: c.x + 1, y: c.y + 1, width: Math.max(0, c.w - 2), height: Math.max(0, c.h - 2),
        fill: isOther(c.it.label) ? OTHER : SEQ[idx], class: 'oe-bar' }, g);
      if (c.w > 74 && c.h > 30) {
        var dark = idx >= 4 && !isOther(c.it.label), lab = fit(c.it.label, c.w);
        if (lab) txt(g, c.x + 9, c.y + 20, lab, { 'font-size': 12.5, fill: dark ? '#fff' : INK });
        if (c.h > 48) txt(g, c.x + 9, c.y + 38, fmt(c.it.value, 0),
          { 'font-size': 13, fill: dark ? 'rgba(255,255,255,.88)' : INK, class: 'oe-val' });
      }
    });
    footer(svg, 0, H + 20, unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     sunburst — ruota a due livelli (es. regioni → province), totale al centro
     spec: items:[{label, value, children:[{label, value}]}], unit, note?,
           centerLabel, centerScale (default 1000: mln → mld), dec
     ================================================================ */
  function sunburst(host, spec) {
    var W = spec.width || 920, r0 = 92, r1 = 215, r2 = 340;
    var cx = W / 2, cy = r2 + 12, dec = spec.dec || 0;
    var items = spec.items.slice().sort(function (a, b) { return b.value - a.value; });
    var tot = sum(items.map(function (i) { return i.value; })) || 1, max = items[0].value;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (cy + r2 + 70), class: 'oe-chart oe-sun', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Grafico a ruota');
    function pt(r, a) { return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
    function arc(ri, ro, a0, a1) {
      var l = (a1 - a0) > Math.PI ? 1 : 0, p0 = pt(ro, a0), p1 = pt(ro, a1), p2 = pt(ri, a1), p3 = pt(ri, a0);
      return 'M' + p0[0].toFixed(1) + ' ' + p0[1].toFixed(1) + ' A' + ro + ' ' + ro + ' 0 ' + l + ' 1 ' +
        p1[0].toFixed(1) + ' ' + p1[1].toFixed(1) + ' L' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1) +
        ' A' + ri + ' ' + ri + ' 0 ' + l + ' 0 ' + p3[0].toFixed(1) + ' ' + p3[1].toFixed(1) + ' Z';
    }
    function radial(g, r, a, s, attrs) {   // testo radiale, mai capovolto
      var deg = a * 180 / Math.PI, flip = Math.cos(a) < 0, p = pt(r, a);
      var t = txt(g, p[0], p[1], s, Object.assign({ 'dominant-baseline': 'central', 'text-anchor': flip ? 'end' : 'start' }, attrs));
      t.setAttribute('transform', 'rotate(' + (flip ? deg + 180 : deg).toFixed(1) + ' ' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ')');
    }
    function fit(str, px) { var n = Math.floor(px / 6.4); return str.length > n ? (n > 4 ? str.slice(0, n - 1) + '…' : '') : str; }
    var a = -Math.PI / 2;
    items.forEach(function (it) {
      var a1 = a + 2 * Math.PI * it.value / tot, mid = (a + a1) / 2;
      var idx = Math.min(SEQ.length - 1, Math.round(2 + Math.pow(it.value / max, 0.5) * (SEQ.length - 3)));
      var fill = SEQ[idx], dark = idx >= 4;
      var kids = (it.children || []).slice().sort(function (x, y) { return y.value - x.value; });
      var g = el('g', { class: 'oe-row', tabindex: '0' }, svg);
      g.__tip = function () {
        var list = kids.slice(0, 3).map(function (k) { return [k.label, fmt(k.value, dec)]; });
        list.push(['Quota sul totale', fmt(it.value / tot * 100, 1) + '%']);
        list.push(['Totale', fmt(it.value, dec)]);
        return tipHTML(it.label, (spec.unit || '') + (kids.length ? ' · ' + kids.length + ' ' + (spec.childName || 'voci') : ''), list);
      };
      el('path', { d: arc(r0, r1, a, a1), fill: fill, stroke: '#fff', 'stroke-width': 1.5, class: 'oe-bar' }, g);
      if ((a1 - a) * (r0 + 40) > 15) {
        var lab = fit(it.label + ' ' + fmt(it.value, 0), r1 - r0 - 16);
        if (lab) radial(g, r0 + 10, mid, lab, { 'font-size': 12.5, fill: dark ? '#fff' : INK });
      }
      var b = a;
      kids.forEach(function (k) {
        var b1 = b + (a1 - a) * k.value / it.value, kmid = (b + b1) / 2;
        var kg = el('g', { class: 'oe-row', tabindex: '0' }, svg);
        kg.__tip = function () {
          return tipHTML(k.label, it.label, [['Quota su ' + it.label, fmt(k.value / it.value * 100, 1) + '%'], ['Totale', fmt(k.value, dec)]]);
        };
        el('path', { d: arc(r1 + 3, r2, b, b1), fill: fill, 'fill-opacity': 0.42, stroke: '#fff', 'stroke-width': 1, class: 'oe-bar' }, kg);
        if ((b1 - b) * (r1 + r2) / 2 > 13) {
          var kl = fit(k.label + ' ' + fmt(k.value, 0), r2 - r1 - 18);
          if (kl) radial(kg, r1 + 12, kmid, kl, { 'font-size': 11.5, fill: INK });
        }
        b = b1;
      });
      a = a1;
    });
    var cs = spec.centerScale === undefined ? 1000 : spec.centerScale;
    txt(svg, cx, cy + 6, fmt(tot / cs, 1), { 'font-size': 40, 'text-anchor': 'middle', fill: INK, class: 'oe-val oe-val--display' });
    if (spec.centerLabel) txt(svg, cx, cy + 30, spec.centerLabel, { 'font-size': 11.5, 'text-anchor': 'middle', fill: MUTED });
    footer(svg, 0, cy + r2 + 32, (spec.unit || '') + (spec.note ? ' — ' + spec.note : ''), spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ================================================================
     sankey — flussi da una colonna di origini a una di destinazioni
     (es. settori di spesa → filiera attivata). NUOVO in v0.6.0
     spec: links:[{source, target, value}], topSources?, topTargets?
           (le voci oltre il limite confluiscono in «Altri»), unit, dec, height
     Colore per origine (rampa a una tinta); al passaggio su un nodo si
     evidenziano i suoi flussi.
     ================================================================ */
  function sankey(host, spec, key) {
    var v = view(spec, key);
    var dec = opt(v, spec, 'dec', 1), unit = opt(v, spec, 'unit', '');
    var W = spec.width || 920, H = opt(v, spec, 'height', 520), nodeW = 14, labelW = 190, gap = 6, top = 34;
    function group(field, n) {
      var tot = {};
      v.links.forEach(function (l) { tot[l[field]] = (tot[l[field]] || 0) + l.value; });
      var names = Object.keys(tot).sort(function (a, b) { return tot[b] - tot[a]; });
      var keep = n && names.length > n ? names.slice(0, n - 1) : names;
      return { keep: keep, map: function (x) { return keep.indexOf(x) > -1 ? x : (spec.otherLabel || 'Altri'); } };
    }
    var S = group('source', opt(v, spec, 'topSources', 0)), T = group('target', opt(v, spec, 'topTargets', 12));
    var agg = {}, sTot = {}, tTot = {};
    v.links.forEach(function (l) {
      var s = S.map(l.source), t = T.map(l.target), k = s + '\u0000' + t;
      agg[k] = (agg[k] || 0) + l.value; sTot[s] = (sTot[s] || 0) + l.value; tTot[t] = (tTot[t] || 0) + l.value;
    });
    function order(tot) {
      return Object.keys(tot).sort(function (a, b) { return isOther(a) - isOther(b) || tot[b] - tot[a]; });
    }
    var sources = order(sTot), targets = order(tTot), total = sum(sources.map(function (s) { return sTot[s]; }));
    var colors = ramp(sources.filter(function (s) { return !isOther(s); }).length), ci = 0, sCol = {};
    sources.forEach(function (s) { sCol[s] = isOther(s) ? OTHER : colors[ci++]; });
    var kH = Math.min((H - gap * (sources.length - 1)) / total, (H - gap * (targets.length - 1)) / total);
    function place(list, tot) {
      var pos = {}, y = top, used = sum(list.map(function (n) { return tot[n] * kH; })) + gap * (list.length - 1);
      y += (H - used) / 2;
      list.forEach(function (n) { pos[n] = { y: y, h: tot[n] * kH, off: 0 }; y += tot[n] * kH + gap; });
      return pos;
    }
    var sp = place(sources, sTot), tp = place(targets, tTot);
    var x0 = labelW, x1 = W - labelW;
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + (top + H + 70), class: 'oe-chart oe-sankey', role: 'img' });
    svg.setAttribute('aria-label', spec.a11y || 'Diagramma di flusso');
    if (spec.sourceTitle) txt(svg, x0, 16, spec.sourceTitle, { 'font-size': 11, fill: MUTED, 'text-anchor': 'end', class: 'oe-src' });
    if (spec.targetTitle) txt(svg, x1 + nodeW, 16, spec.targetTitle, { 'font-size': 11, fill: MUTED, class: 'oe-src' });
    var linkG = el('g', {}, svg);
    // flussi: ordinati per origine e poi per destinazione, così non si incrociano inutilmente
    sources.forEach(function (s) {
      targets.forEach(function (t) {
        var val = agg[s + '\u0000' + t];
        if (!val) return;
        var h = val * kH, ys = sp[s].y + sp[s].off + h / 2, yt = tp[t].y + tp[t].off + h / 2;
        sp[s].off += h; tp[t].off += h;
        var mx = (x0 + nodeW + x1) / 2;
        var g = el('g', { class: 'oe-row oe-flow', tabindex: '0', 'data-s': s, 'data-t': t }, linkG);
        g.__tip = function () {
          return tipHTML(s + ' → ' + t, unit, [['Valore', fmt(val, dec)],
            ['Quota di ' + s, fmt(val / sTot[s] * 100, 1) + '%']]);
        };
        el('path', { d: 'M' + (x0 + nodeW) + ' ' + ys.toFixed(1) + ' C' + mx + ' ' + ys.toFixed(1) + ' ' + mx + ' ' +
          yt.toFixed(1) + ' ' + x1 + ' ' + yt.toFixed(1), fill: 'none', stroke: sCol[s],
          'stroke-opacity': 0.32, 'stroke-width': Math.max(1, h), class: 'oe-bar' }, g);
      });
    });
    function node(name, p, x, side, tot, col) {
      var g = el('g', { class: 'oe-row oe-node', tabindex: '0' }, svg);
      g.__tip = function () {
        return tipHTML(name, unit, [['Totale', fmt(tot, dec)], ['Quota', fmt(tot / total * 100, 1) + '%']]);
      };
      el('rect', { x: x, y: p.y, width: nodeW, height: Math.max(1, p.h), fill: col, class: 'oe-bar' }, g);
      if (p.h >= 9) {
        var tx = side === 'l' ? x - 8 : x + nodeW + 8, anchor = side === 'l' ? 'end' : 'start';
        txt(g, tx, p.y + p.h / 2 + 4, name + '  ' + fmt(tot, dec), { 'font-size': 12, fill: INK, 'text-anchor': anchor });
      }
      function hl(on) {
        Array.prototype.forEach.call(linkG.querySelectorAll('.oe-flow'), function (f) {
          var mine = f.getAttribute(side === 'l' ? 'data-s' : 'data-t') === name;
          f.classList.toggle('is-dim', on && !mine);
        });
      }
      g.addEventListener('pointerenter', function () { hl(true); });
      g.addEventListener('pointerleave', function () { hl(false); });
      g.addEventListener('focus', function () { hl(true); });
      g.addEventListener('blur', function () { hl(false); });
    }
    sources.forEach(function (s) { node(s, sp[s], x0, 'l', sTot[s], sCol[s]); });
    targets.forEach(function (t) { node(t, tp[t], x1, 'r', tTot[t], isOther(t) ? OTHER : DEEP); });
    footer(svg, x0, top + H + 30, unit, spec.source);
    host.appendChild(svg);
    wire(svg);
  }

  /* ---------- interazioni comuni ---------- */
  function wire(svg) {
    svg.addEventListener('pointermove', function (e) {
      var node = e.target.closest ? e.target.closest('.oe-row, .oe-region') : null;
      if (node && node.__tip) showTip(node.__tip(), e.clientX, e.clientY);
      else hideTip();
    });
    svg.addEventListener('pointerleave', hideTip);
    svg.addEventListener('focusin', function (e) {
      var node = e.target.closest('.oe-row, .oe-region');
      if (node && node.__tip) {
        var r = node.getBoundingClientRect();
        showTip(node.__tip(), r.left + r.width / 2, r.top + r.height / 2);
      }
    });
    svg.addEventListener('focusout', hideTip);
    Array.prototype.forEach.call(svg.querySelectorAll('.oe-lg'), function (g) {   // legenda → evidenzia la serie
      var i = g.getAttribute('data-series');
      function on() { svg.setAttribute('data-focus', i); }
      function off() { svg.removeAttribute('data-focus'); }
      g.addEventListener('pointerenter', on); g.addEventListener('pointerleave', off);
      g.addEventListener('focus', on); g.addEventListener('blur', off);
    });
  }

  /* ---------- montaggio ---------- */
  var TYPES = { hbars: hbars, columns: columns, line: line, compare: compare, waterfall: waterfall,
    map: map, donut: donut, grid: grid, treemap: treemap, sunburst: sunburst, sankey: sankey };

  function draw(host, spec, key) {
    host.innerHTML = '';
    setPalette(host);
    var fn = TYPES[spec.type];
    if (!fn) { host.textContent = 'OECharts: tipo sconosciuto «' + spec.type + '»'; return; }
    fn(host, spec, key);
    if (!reduce) { host.classList.remove('is-in'); void host.offsetWidth; host.classList.add('is-in'); }
  }

  /* render(host, spec): disegna un grafico, con il controllo segmentato se ha viste */
  function render(host, spec) {
    var prev = host.previousElementSibling;
    if (prev && prev.classList.contains('oe-fig__ctrl')) prev.remove();
    var key = spec.views ? spec.views[0].key : null;
    if (spec.views) {
      var ctrl = document.createElement('div');
      ctrl.className = 'oe-fig__ctrl fig__ctrl';
      if (spec.controlLabel) {
        var lab = document.createElement('span');
        lab.className = 'oe-fig__ctrl-label fig__ctrl-label';
        lab.textContent = spec.controlLabel;
        ctrl.appendChild(lab);
      }
      var nav = document.createElement('div');
      nav.className = 'oe-segment';
      nav.setAttribute('role', 'tablist');
      ctrl.appendChild(nav);
      spec.views.forEach(function (vw, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'oe-segment__btn' + (i === 0 ? ' is-active' : '');
        b.textContent = vw.label;
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(nav.querySelectorAll('.oe-segment__btn'), function (o) {
            o.classList.remove('is-active'); o.setAttribute('aria-selected', 'false');
          });
          b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
          draw(host, spec, vw.key);
        });
        nav.appendChild(b);
      });
      host.parentNode.insertBefore(ctrl, host);
    }
    draw(host, spec, key);
  }

  function mount(root, data) {
    data = data || window.OE_DATA || {};
    Array.prototype.forEach.call((root || document).querySelectorAll('[data-oe-chart]'), function (host) {
      var spec = data[host.getAttribute('data-oe-chart')];
      if (spec) render(host, spec);
    });
  }

  var bound = false;
  function autoMount() {
    if (window.OE_DATA) mount(document);
    if (!bound) { window.addEventListener('scroll', hideTip, { passive: true }); bound = true; }
  }

  window.OECharts = { version: VERSION, render: render, mount: mount, types: Object.keys(TYPES), fmt: fmt };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoMount);
  else autoMount();
})();
