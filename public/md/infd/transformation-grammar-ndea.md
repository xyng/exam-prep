---
title: Reguläre Grammatik zu NDEA
---
- Zustand $Z_{A} \forall A \in V$
- Startzustand ist Zustand für die Startvariable.
- Zusätzlich Endzustand $Z_{end}$
- Für jede Regel der Gestalt $A \rightarrow aB$, mit $a \in \Sigma$, $A, B \in V$ erzeuge Kante von $Z_{A}$ zu $Z_{B}$ mit Beschriftung $a$.
- Für jede Regel der Gestalt $A \rightarrow a$, mit $a \in \Sigma$, $A \in V$ erzeuge Kante von $Z_{A}$ zu $Z_{end}$ mit Beschriftung $a$.