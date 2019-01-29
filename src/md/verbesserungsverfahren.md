## Iterative Improvement
Beginne mit aktueller Lösung und wähle einen Nachbarn zu dieser.
Wähle beste Lösung und fahre mit dieser fort.
Am Ende (keine besseren Nachbarn mehr) erhält man lokales Optimum, was aber deutlich schlechter als das globale sein kann.
Ansatz: mit vielen Startlösungen anstoßen und aus den verschiedenen Läufen bestes Ergebnis verwenden.

## Simulated Annealing
Wähle Nachbar s' zu Lösung s. Wenn c(s) >= c(s'), fahre mit s' fort.
Ist c(s) < c(s'), wird s' mit einer Wahrscheinlich keit von `e^(-((c(s') - c(s)) / t_i))` gewählt, wobei t eine gegen 0 konvergierende Folge ist.

## Thershold Acceptance
Variante von Simulated Annealing, bei der keine Wahrscheinlichkeit verwendet wird. Dadurch deterministisch.
Ein schlechteres s' wird akzeptiert, wenn c(s') - c(s) < t_i ist.

## Tabusuche
Besuchte Lösungen (bzw. Eigenschaften von diesen) werden in Tabuliste gespeichert.
Es dürfen nur Nachbarn gewählt werden, die nicht in Liste sind. Zyklen werden so vermieden.
Liste wird gewöhnlich begrenzt, alte Einträge vergessen.
Aspirationskriterium erlaubt Lösung, obwohl sie in Liste steht. (z.B. besserer Zielfunktionswert o.Ä.)

Langzeitgedächtnis: "gute" Lösungen speichern und bei "Sackgassen" zu ihnen zurückkehren.
