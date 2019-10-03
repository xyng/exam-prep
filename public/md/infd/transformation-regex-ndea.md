---
title: Regulärer Ausdruck zu NDEA
---
Teilautomaten für Teilausdrücke:
- Leere Menge: Zwei Zustände (Ein Start, ein Endzustand) ohne Kante dazwischen.
- Symbole $a \in \Sigma$: Zwei Zustände (Ein Start, ein Endzustand) mit einer durch $a$ beschrifteten Kante dazwischen.
- Alternative $(E_1|E_2)$: NDEAen $A_1$ und $A_2$. Neuer Startzustand mit $\varepsilon$-Kante zu $Z'_1$ und $Z'_2$ (Startzustände von $A_1$ und $A_2$).
- Verkettung $(E_1E_2)$: NDEAen $A_1$ und $A_2$. Erstelle $\varepsilon$-Kante von jedem Endzustand von $A_1$ zum Startzustand von $A_2$. Mache Endzustände von $A_1$ sowie Startzustand von $A_2$ zu normalen Zuständen.
- Kleene-Stern $(E_1)^*$: NDEA $A_1$. Erstelle neuen Startzustand (gleichzeitig einziger Endzustand) mit $\varepsilon$-Kante zu Startzustand von $A_1$ und $\varepsilon$-Kante von jedem (ehemaligen) Endzustand von $A_1$.