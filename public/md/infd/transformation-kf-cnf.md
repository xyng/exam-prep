---
title: KF zu CNF
---
1. Ersetze in Regeln $a \in \Sigma$ durch $A_a$. Füge Regel $A_a \rightarrow a$ hinzu.
2. Betrachte Graph der Zustände mit Regeln $V \rightarrow V$. Kontrahiere darin Kreise.
    1. Wenn es also einen Zyklus gibt $B_1 \rightarrow B_2$, ..., $B_k \rightarrow B_1$ ersetze alle Vorkommen von $B_2, ..., B_k$ durch $B_1$
3. Entferne in diesem Graph Senken (Knoten ohne ausgehende Kante)
    1. Wenn Regel $C \rightarrow B$ und $B$ senke
    2. Für $B \rightarrow x$ ($x \in (V \cup \Sigma)^*$) erzeuge Regel $C \rightarrow x$
    3. Entferne Regel $C \rightarrow B$. $C$ ist nun ggf. Senke.
4. Kürze Variablenketten:
    1. Wenn $A \rightarrow B_1B_2 ... B_k$ entferne Regel und erzeuge $C \rightarrow B_2 ... B_k$ und $A \rightarrow C$
    2. Wiederhole bis $V \rightarrow VV$ erreicht.