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

TODO

## Regulärer Ausdruck $\rightarrow$ NDEA

TODO

## DEA -> Regulärer Ausdruck

TODO