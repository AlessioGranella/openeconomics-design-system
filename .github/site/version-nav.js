/* Selettore di versione autonomo, iniettato a deploy-time SOLO nelle versioni
   che non hanno il selettore integrato (gli snapshot vecchi). Nessuna dipendenza.
   Si inserisce nella SIDEBAR SINISTRA (sotto il brand), coerente col selettore
   integrato. Legge /openeconomics-design-system/versions.json. */
(function () {
  var m = location.pathname.match(/^(.*?\/openeconomics-design-system\/)/)
  var root = m ? m[1] : '/'
  var seg = location.pathname.match(/\/(v[0-9][^/]*)\//)
  var current = seg ? seg[1] : 'latest'

  fetch(root + 'versions.json')
    .then(function (r) { return r.ok ? r.json() : null })
    .then(function (d) { if (d) place(d) })
    .catch(function () { /* offline / versions.json assente */ })

  function buildWidget(d) {
    var wrap = document.createElement('div')
    wrap.id = 'oe-vnav'
    wrap.style.cssText = 'margin: 0 0 24px;'

    var label = document.createElement('label')
    label.textContent = 'Versione'
    label.style.cssText =
      'display:block;font-family:var(--oe-font-mono),ui-monospace,monospace;font-size:10px;' +
      'text-transform:uppercase;letter-spacing:.06em;color:var(--oe-gray-500,#999);margin-bottom:6px;'

    var field = document.createElement('div')
    field.style.cssText = 'position:relative;'

    var sel = document.createElement('select')
    sel.setAttribute('aria-label', 'Cambia versione del design system')
    sel.style.cssText =
      'appearance:none;-webkit-appearance:none;width:100%;' +
      'font-family:var(--oe-font-mono),ui-monospace,monospace;font-size:13px;color:var(--oe-gray-800,#2c2c2c);' +
      'background:var(--oe-white,#fff);border:1px solid var(--oe-gray-200,#e7e7e7);border-radius:0;' +
      'padding:7px 28px 7px 10px;cursor:pointer;'

    var optL = document.createElement('option')
    optL.value = 'latest'
    optL.textContent = 'Latest' + (d.latest ? ' (' + d.latest + ')' : '')
    sel.appendChild(optL)
    ;(d.versions || []).forEach(function (v) {
      var o = document.createElement('option')
      o.value = v
      o.textContent = v
      sel.appendChild(o)
    })
    sel.value = current
    sel.addEventListener('change', function () {
      location.href = sel.value === 'latest' ? root : root + sel.value + '/'
    })

    var chev = document.createElement('span')
    chev.textContent = '▾'
    chev.setAttribute('aria-hidden', 'true')
    chev.style.cssText = 'position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--oe-gray-500,#999);font-size:11px;'

    field.appendChild(sel)
    field.appendChild(chev)
    wrap.appendChild(label)
    wrap.appendChild(field)
    return wrap
  }

  function place(d) {
    var tries = 0
    ;(function attempt() {
      if (document.getElementById('oe-vnav') || document.getElementById('dx-version-select')) return
      var sidebar = document.querySelector('.dx-sidebar')
      if (!sidebar) {
        if (tries++ < 50) return setTimeout(attempt, 100) // attende il mount di React
        return
      }
      var widget = buildWidget(d)
      var brand = sidebar.querySelector('.dx-brand')
      if (brand && brand.parentNode === sidebar) brand.insertAdjacentElement('afterend', widget)
      else sidebar.insertBefore(widget, sidebar.firstChild)
    })()
  }
})()
