---
title: Heuristische Eröffnungsverfahren
---

## Nearest Neighbour
Gehe iterativ jeweils zum nächsten Knoten weiter, der die geringste Entfernung hat.
**Greedy-Algorithmus** - sucht zunächst immer günstigste Alternative, muss aber gegen Ende ggf. sehr teure Kanten verwenden.

## Double Nearest Neighbour
Gehe zum Knoten mit geringster Entfernung. Entweder vom zuerst besuchten Knoten, oder vom aktuellen Knoten aus.
```
(f) <---> (x) <---> (x) <---> (c)

f: first
c: current
```

Beide haben Laufzeit von O(n^2)

## Nearest Insertion
Finde Knoten mit geringster Entfernung zur bisher erstellten Teiltour, und füge ihn an günstigster Stelle ein.

```
Entfernung:
d(i): min(y=1, ..., k){ ci(y),i }

Knoten i(k+1) Einfügen zwischen Knoten il und i(l+1):
min{ cil,i(k+1) + ci(k+1), i(l+1) - cil, i(l+1) }
```

## Farthest Insertion
Wie Nearest Insertion, aber Wähle Knoten i(k+1) als Knoten mit der weitesten Entfernung zur aktuellen Teiltour

## Cheapest Insertion
Finde Knoten mit geringsten Einfügekosten in aktuelle Teiltour.

```
min(y=1, ..., k) { ciy,i(k+1) + ci(k+1), i(y+1) - ciy, i(y+1) }
```