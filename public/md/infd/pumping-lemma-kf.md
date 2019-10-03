---
title: Pumping Lemma für kontextfreie Sprachen
---
Sei $L$ eine reguläre Sprache. $\exists n := n(L)$ (sprich: $n$ abhängig von $L$), sodass sich alle Wörter $z \in L$ zerlegen lassen in $z = uvwxy$ mit den Eigenschaften:

  1. $|vx| \geq 1$
  2. $|vwx| \leq n$
  3. $uv^*wx^*y \in L$