---
title: DEA zu Regulärer Grammatik
---
- Eine Variable $A_{i}$ für jeden Zustand $Z_{i} \in Z$. Die Variable des Startzustands ist die Startvariable.
- Für jeden Übergang von $Z_{i}$ zu $Z_{j}$ mit Terminal $a$ erstelle neue Regel $A_{i} \rightarrow aA_{j}$.
- Ist $Z_{j}$ hierbei ein Endzustand erzeuge zusätzliche Regel $A_{i} \rightarrow a$
