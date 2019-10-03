---
title: Pumping Lemma für reguläre Sprachen
---
Sei $L$ eine reguläre Sprache. $\exists n := n(L)$ (sprich: $n$ abhängig von $L$), sodass sich alle Wörter $z \in L$ zerlegen lassen in $z = uvw$ mit den Eigenschaften:

  1. $|v| \geq 1$
  2. $|uv| \leq n$
  3. $uv^*w \in L$