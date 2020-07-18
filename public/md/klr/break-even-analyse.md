---
title: Break Even Analyse
---
- Bestimmen, wie viele Produkte abgesetzt werden müssen, um (einen bestimmten) Gewinn zu erzielen
- Sensitivitäts- und Risikoanalyse: Wie verändert sich der Gewinn bei verändertem Absatz oder Schwankungen in Beschäftigung oder Kostenstruktur (= Verhältnis aus fixen und variablen Kosten)?
- Ist es profitabel, Prozesse auszulagern oder zu verändern (zB. variable in fixe Kosten umwandeln)?

Typische Annahmen:
- Ausbringungsmenge einzige Kosteneinflussgröße.
  - Potentielle Preisänderungen (Löhne, Rohstoffpreise, ...) vernachlässigt
- kostenverlauf linear
- Statische Rechnung (nur ein Zeitpunkt berücksichtigt, keine Auf- und Abzinsung)

Ausgangsgleichung:
$$
\text{Gewinn} = p * x - k_v * x - k_{fix} = d * x - k_{fix}
$$
$$
p = \text{Absatzpreis}\\
x = \text{Menge}\\
k = \text{var. oder fixe Kosten}\\
d = \text{Deckungsbeitrag pro Stück}\\
x_{BE} = \text{Gewinnschwelle}
$$

$x_{BE}$ ist Schnittpunkt der Kosten- und Erlösfunktion.

Es gilt:

$$
\text{Gewinn} = 0 \Leftrightarrow x_{BE} = \frac{K_{fix}}{d}
$$

### Gewinnvorgabe bei einem Produkt
Mindestgewinn $G_{min}$:

$$
\text{Gewinn} = G_{min} \Leftrightarrow x_{BE} = \frac{K_{fix} + G_{min}}{d}
$$

Mindest Umsatzrendite (Return on Sales):
$$
\text{RoS} = \frac{\text{Gewinn}}{\text{Umsatz}} = \frac{p*x - k_v * x - x * k_{fix}}{p * x}\\
\Leftrightarrow x = \frac{k_{fix}}{p * (1 - \text{RoS}) - k_v}\\
\Rightarrow x_{BE} = \frac{k_{fix}}{p * (1 - \text{RoS}_{min}) - k_v}
$$

### Mehrproduktfall
$$
\text{Gewinn} = \sum_i{(p_i * x_i - k_{vi} * x_i)} - k_{fix} = \sum_i{d_i * x_i} - k_{fix}
$$

Gewinnschwelle:
$$
\text{Gewinn} = 0 \Leftrightarrow \exists i: x_i = \frac{k_{fix} - \sum_{j \neq i}{d_j*x_j}}{d_i}
$$
