---
title: Abschreibungsarten
---
### lineare Abschreibung
Gleichmäßige Abschreibung über Nutzungsdauer

Formel: 
$$
\text{Abschreibung}_t = \frac{\text{Anschaffungswert} - \text{Restwert}}{T} = \frac{AW_0-RW_t}{T}
$$

### arithmetisch-degressive Abschreibung
Gleichmäßig sinkende Abschreibung über Nutzungsdauer

Formel:
$d = \text{Degressionsbetrag}$
$$
\text{Abschreibung}_t = d * (T+1-t)\\
$$
$$
d = \frac{AW_0-RW_t}{\frac{1}{2}*T*(T+1)}
$$

### geometrisch-degressive Abschreibung
Abschreibung eines konstanten Prozentsatzes $a$ des Restbuchwertes.

Formel:
$$
\text{Abschreibung}_t = \text{Restbuchwert}_t * a
$$

Abschreibungssatzbestimmung für bestimmten Restwert:
$$
a = 1 - \sqrt[T]{\frac{RW_T}{AW_0}}
$$

### leistungsabhängige Abschreibung
Abschreibung nach (erwarteter) Laufleistung

Formel:
$$
\text{Abschreibung}_t = \frac{\text{Leistung}_t}{\text{Gesamtleistung}} * (AW_0-RW_T)
$$
