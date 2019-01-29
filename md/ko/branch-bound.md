---
title: Branch & Bound
---

Bei maximierungsproblemen: Ausschluss von Branches über Obere Schranken (wenn `<=` aktueller Wert).
Bei minimierungsproblemen: Ausschluss von Branches über untere Schranken (wenn `>=` aktueller Wert).

Verschiedene Iterationsmethoden.

- Tiefensuche (lifo)
    - Zuletzt generiertes Teilproblem wird als erstes verarbeitet
- Breitensuche
    - Alle Teilprobleme einer Ebene werden berechnet, bevor nächste Ebene berechnet wird.
- Bestensuche
    - Sortiere alle Teilprobleme nach oberen/unteren Schranken

Es ist hilfreich, vorher eine heuristische Lösung zu generieren.
Hierdurch ist ein grundsätzlicher Erwartungswert vorhanden, und einige "schlechte" Lösungen können frühzeitig gestrichen werden.