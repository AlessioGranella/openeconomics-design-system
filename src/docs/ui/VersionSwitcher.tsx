import { useEffect, useState } from 'react'

interface VersionsFile {
  latest: string
  versions: string[]
}

/** Radice del sito (fino a `/openeconomics-design-system/`), così funziona
 *  sia alla root sia dentro una sottocartella di versione `/vX.Y.Z/`. */
function siteRoot(): string {
  const m = location.pathname.match(/^(.*?\/openeconomics-design-system\/)/)
  return m ? m[1] : '/'
}

/** Selettore di versione: naviga tra la "latest" (root) e gli snapshot /vX.Y.Z/. */
export default function VersionSwitcher() {
  const [versions, setVersions] = useState<string[]>([])
  const root = siteRoot()
  const current = `v${__DS_VERSION__}`
  const seg = location.pathname.match(/\/(v[0-9][^/]*)\//)
  const selected = seg ? seg[1] : 'latest'

  useEffect(() => {
    fetch(root + 'versions.json')
      .then((r) => (r.ok ? (r.json() as Promise<VersionsFile>) : null))
      .then((d) => { if (d?.versions) setVersions(d.versions) })
      .catch(() => { /* in locale versions.json non esiste: mostra solo Latest */ })
  }, [root])

  function go(v: string) {
    location.href = v === 'latest' ? root : `${root}${v}/`
  }

  return (
    <div className="dx-version">
      <label className="dx-version__label" htmlFor="dx-version-select">Versione</label>
      <div className="dx-version__field">
        <select
          id="dx-version-select"
          className="dx-version__select"
          value={selected}
          onChange={(e) => go(e.target.value)}
        >
          <option value="latest">Latest ({current})</option>
          {versions.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
        <span className="dx-version__chevron" aria-hidden>▾</span>
      </div>
    </div>
  )
}
