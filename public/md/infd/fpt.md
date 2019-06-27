---
title: FPT (Fixed Parameter Tractability)
---
## Definition
Durch wählen einer Konstante $k$ lässt sich die Laufzeit auf $\mathcal{O}(f(k)*poly(n))$, mit einer berechenbaren Funktion ($exp$ Erlaubt!) $f(k)$, reduzieren.

## Kernelization
Reduziere das Problem, indem leichte Teilprobleme abgetrennt werden, sodass nur noch der schwere Teil (abhängig von $k$) übrig bleibt.

## Spannbaum
Prüfe zugehörigkeit von Elementen über Binärbaum (Zugehörig / Nicht zugehörig). Schränke Problem mit Konstante $k$ so ein, dass der Baum höchstens $k$ viele Ebenen besitzt.