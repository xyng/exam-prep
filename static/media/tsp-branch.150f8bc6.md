## Branching beim TSP
1. Branching über Anfangswege von Touren
Lege pro Ebene einen Knoten der Tour fest.
Die Blätter des Baumes entsprechen den kompletten Reihenfolgen.

Dieses Muster lässt sich generelll bei Reihenfolgenproblemen (z.B. Scheduling) anwenden.

2. Binäres Branching über Kanten
Pro Ebene zwei Zweige: 1) Kante (i, j) ist in Tour enthalten.
2) Kante (i, j) ist nicht in Tour enthalten.
