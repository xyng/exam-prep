---
title: Semi-Entscheidbare Probleme
---
## Post'sches Korrespondenzproblem (PCP)
> "Dominosteine (mit Ziffernfolgen oben und unten) aneinander kleben, sodass oben und unten die gleiche Ziffernfolge steht."

Semi-Entscheidbarer Algo:
```
for n := 1,2,3,...:
    for all (i[1],...,i[n]) ∈ {1,...,k}^n:
        if x[i][1] ...x[i][n] = y[i][1] ... y[i][n]: return 1
```
(Teste alle möglichen Kombinationen (viele!). Wenn es keine Lösung gibt -> endlosschleife; Wenn Lösung gefunden -> Terminiere)
## Halteproblem
> "Entscheide, ob Algorithmus A hält"

Semi-Entscheidbarer Algo:
Führe Programm/TM aus, bis terminiert. Bei Termination gebe `Wahr` zurück. Bei keiner Termination folgt ohnehin eine Endlosschleife.