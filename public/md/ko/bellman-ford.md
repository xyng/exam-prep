---
title: Bellman-Ford
---

```
dk[i, j] = min{ dk-1[i, j], min (h, j) { dk-1[i, h] + chj } }
k = 2, ..., n - 1
```

Initialisation: `d1[i, j] = cij`