---
title: Transformationen in Typ 3
---

## DEA $\rightarrow$ Reguläre Grammatik
- Eine Variable $A_{i}$ für jeden Zustand $Z_{i} \in Z$. Die Variable des Startzustands ist die Startvariable.
- Für jeden Übergang von $Z_{i}$ zu $Z_{j}$ mit Terminal $a$ erstelle neue Regel $A_{i} \rightarrow aA_{j}$.
- Ist $Z_{j}$ hierbei ein Endzustand erzeuge zusätzliche Regel $A_{i} \rightarrow a$

## Reguläre Grammatik $\rightarrow$ NDEA
- Zustand $Z_{A} \forall A \in V$
- Startzustand ist Zustand für die Startvariable.
- Zusätzlich Endzustand $Z_{end}$
- Für jede Regel der Gestalt $A \rightarrow aB$, mit $a \in \Sigma$, $A, B \in V$ erzeuge Kante von $Z_{A}$ zu $Z_{B}$ mit Beschriftung $a$.
- Für jede Regel der Gestalt $A \rightarrow a$, mit $a \in \Sigma$, $A \in V$ erzeuge Kante von $Z_{A}$ zu $Z_{end}$ mit Beschriftung $a$.

## NDEA $\rightarrow$ DEA

- Sei $S_{start} \in w^Z$ Menge aller Zustände, die von $Z_{start}$ über $\varepsilon$-Kanten erreicht werden können. Erstelle Startzustand $Y_{S_{start}}$.

- $a$-Übergang ($\forall a \in \Sigma$) von $Y_{S}$ nach $Y_{S'}$ wenn $S'$ *genau alle* Zustände enthält, die von $S$ aus über einen $a$-Übergang, gefolgt von $\varepsilon$-Übergängen erreicht werden können.

- $Y_{S}$ ist ein Endzustand, wenn $S \cap Z_{end} \neq \emptyset$

## Regulärer Ausdruck $\rightarrow$ NDEA

Teilautomaten für Teilausdrücke:
- Leere Menge: Zwei Zustände (Ein Start, ein Endzustand) ohne Kante dazwischen.
- Symbole $a \in \Sigma$: Zwei Zustände (Ein Start, ein Endzustand) mit einer durch $a$ beschrifteten Kante dazwischen.
- Alternative $(E_1|E_2)$: NDEAen $A_1$ und $A_2$. Neuer Startzustand mit $\varepsilon$-Kante zu $Z'_1$ und $Z'_2$ (Startzustände von $A_1$ und $A_2$).
- Verkettung $(E_1E_2)$: NDEAen $A_1$ und $A_2$. Erstelle $\varepsilon$-Kante von jedem Endzustand von $A_1$ zum Startzustand von $A_2$. Mache Endzustände von $A_1$ sowie Startzustand von $A_2$ zu normalen Zuständen.
- Kleene-Stern $(E_1)^*$: NDEA $A_1$. Erstelle neuen Startzustand (gleichzeitig einziger Endzustand) mit $\varepsilon$-Kante zu Startzustand von $A_1$ und $\varepsilon$-Kante von jedem (ehemaligen) Endzustand von $A_1$.

## DEA $\rightarrow$ Regulärer Ausdruck

- Neuer Zustand $Z_e$. $\varepsilon$-Kanten von jedem Endzustand zu $Z_e$. $Z_e$ nun einziger Endzustand.
- Solange $\exists Z \in \mathcal{Z} \setminus \{Z_s, Z_e\}$. Für jedes Paar $(Z_i, Z_o) \in $Z_{in} \times Z_{out}$: Sein folgende RegEx an den Übergängen (wenn sie $\exists$)
  - $E_i: Z_i \rightarrow Z$
  - $E_z: Z \rightarrow Z$
  - $E_o: Z \rightarrow Z_o$
  - $E_{io}: Z_i \rightarrow Z_o$
  - Setze $E_{io} := E_{io}|E_i(E_z)^*E_o$
- Entferne $Z$.
- Am Ende nurnoch $Z_{start}$ und $Z_{e}$ übrig mit RegEx $(E_1)^*E_2$