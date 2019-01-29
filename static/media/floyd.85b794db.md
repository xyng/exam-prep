`dk[i, j]` ist Länge des kürzesten Weges von `i` nach `j`, die nur die Zwischenknoten `1, ..., k` enthalten.

```
dk[i, j] = min{dk-1[i, j], dk-1[i, k] + dk-1[k, j]}
```

Initialbelegung: `d0[i, j] = cij` und `d0[i, i] = 0`

```
for i, j:
    d[i, j] = cij // Direkte Verbindung? Sonst Infinity
    pred[i, j] = i // Startkante
for k, i, j:
    if d[i, k] + d[k, j] < d[i, j]:
        d[i, j] = d[i, k] + d[k, j]
        pred[i, j] = pred[k, j]
```