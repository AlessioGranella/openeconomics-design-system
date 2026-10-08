# -*- coding: utf-8 -*-
"""Converte un GeoJSON (regioni, province, comuni…) nei `paths` + `viewBox` del tipo `map`
di oe-charts.js. Proiezione equirettangolare corretta sulla latitudine media, semplificazione
dei punti sotto `tol` pixel. Uso:

    python3 geojson_to_paths.py regioni.geojson NOME_REG > paths.json

oppure da Python:  paths, viewbox = project({nome: geometria_geojson_come_stringa_o_dict})
Nel grafico: {type:'map', paths, viewBox, data:{…: {regions:[{name, value, parts}]}}};
`name` deve coincidere con la chiave di `paths`.
"""
import json, math, sys


def project(geoms, MW=300, MH=400, tol=0.55):
    lons, lats, parsed = [], [], {}
    for name, g in geoms.items():
        g = json.loads(g) if isinstance(g, str) else g
        c = g['coordinates']
        polys = c if g['type'] == 'MultiPolygon' else [c]
        parsed[name] = polys
        for poly in polys:
            for ring in poly:
                for lo, la in ring:
                    lons.append(lo); lats.append(la)
    lo0, lo1, la0, la1 = min(lons), max(lons), min(lats), max(lats)
    k = math.cos(math.radians((la0 + la1) / 2))
    sc = min(MW / ((lo1 - lo0) * k), MH / (la1 - la0))

    def path(polys):
        out = []
        for poly in polys:
            for ring in poly:
                pts, px, py = [], None, None
                for lo, la in ring:
                    x, y = (lo - lo0) * k * sc + 6, (la1 - la) * sc + 6
                    if px is None or abs(x - px) + abs(y - py) > tol:
                        pts.append((x, y)); px, py = x, y
                if len(pts) >= 3:
                    out.append("M" + " L".join("%.1f %.1f" % p for p in pts) + " Z")
        return " ".join(out)

    return {n: path(p) for n, p in parsed.items()}, "0 0 %.0f %.0f" % (MW + 14, (la1 - la0) * sc + 14)


if __name__ == '__main__':
    src, prop = sys.argv[1], sys.argv[2]
    gj = json.load(open(src, encoding='utf-8'))
    paths, vb = project({f['properties'][prop]: f['geometry'] for f in gj['features']})
    json.dump({'paths': paths, 'viewBox': vb}, sys.stdout, ensure_ascii=False)
