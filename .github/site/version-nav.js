/* Selettore di versione autonomo, iniettato a deploy-time SOLO nelle versioni
   che non hanno il selettore integrato (gli snapshot vecchi). Nessuna dipendenza.
   Legge /openeconomics-design-system/versions.json e naviga tra le versioni. */
(function () {
  var m = location.pathname.match(/^(.*?\/openeconomics-design-system\/)/)
  var root = m ? m[1] : '/'
  var seg = location.pathname.match(/\/(v[0-9][^/]*)\//)
  var current = seg ? seg[1] : 'latest'

  fetch(root + 'versions.json')
    .then(function (r) { return r.ok ? r.json() : null })
    .then(function (d) {
      if (!d) return
      var versions = d.versions || []
      var wrap = document.createElement('div')
      wrap.id = 'oe-vnav'
      wrap.style.cssText =
        'position:fixed;top:12px;right:12px;z-index:99999;display:flex;align-items:center;' +
        'gap:8px;background:#270065;color:#fff;padding:8px 10px;' +
        'font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;' +
        'box-shadow:0 6px 18px rgba(0,0,0,.22)'

      var label = document.createElement('span')
      label.textContent = 'Versione'
      label.style.cssText = 'text-transform:uppercase;letter-spacing:.06em;opacity:.7'

      var sel = document.createElement('select')
      sel.setAttribute('aria-label', 'Cambia versione del design system')
      sel.style.cssText =
        'background:#fff;color:#000;border:0;border-radius:0;font-family:inherit;' +
        'font-size:12px;padding:4px 22px 4px 8px;cursor:pointer'

      var optL = document.createElement('option')
      optL.value = 'latest'
      optL.textContent = 'Latest' + (d.latest ? ' (' + d.latest + ')' : '')
      sel.appendChild(optL)
      versions.forEach(function (v) {
        var o = document.createElement('option')
        o.value = v
        o.textContent = v
        sel.appendChild(o)
      })
      sel.value = current

      sel.addEventListener('change', function () {
        location.href = sel.value === 'latest' ? root : root + sel.value + '/'
      })

      wrap.appendChild(label)
      wrap.appendChild(sel)
      document.body.appendChild(wrap)
    })
    .catch(function () { /* offline o versions.json assente: nessun widget */ })
})()
