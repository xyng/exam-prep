---
title: Randomisierte Komplexitätsklassen
---
## RP
Entscheidungsprobleme, für die ein im Worst-Case polynomieller Monte Carlo Algorithmus (mit einseitigem Fehler) existiert, der

- Nein-Instanzen mit Wahrscheinlichkeit $1$ (also immer) korrekt erkennt
- Ja-Instanzen mit Wahrscheinlichkeit $w \geq \frac{1}{2}$ (also immer) korrekt erkennt

> $W$ ist durch eine RTM in $\mathcal{O}(w)$ Zeit mit Wahrscheinlichkeit $w \geq \frac{1}{poly(n)}$ findbar. $\Rightarrow$ wir haben eine sinnvolle Chance!

(Es ist egal, ob Wahrscheinlichkeit $w \geq \frac{1}{poly(n)}$ oder $w \geq \frac{1}{2}$ gewählt wird. Durch polynomiell bzw. konstant viele Ausführungen kann jede beliebige Zielwahrscheinlichkeit erzielt werden)

### Interpretation der Antworten
- JA $\Rightarrow$ Instanz ist Ja-Instanz
- NEIN $\Rightarrow$ Instanz ist Ja- oder Nein-Instanz

## Co-RP
Wahrscheinlichkeiten für Ja- und Nein-Instanz getauscht.

## PP
Entscheidungsproblem, für die ein im Worst-Case polynomieller Monte Carlo Algorithmus existiert, der JA- und NEIN-Instanzen
jeweils mit Wahrscheinlichkeit $w \geq \frac{1}{2}$ korrekt erkennt.
Nutzt nicht viel: Wähle Wahrscheinlichkeit $w = \frac{1}{2} + \varepsilon$ mit $\varepsilon \leq \frac{1}{exp(n)}$. Man benötigt nun exponentiell viele Aufrufe, damit Wahrscheinlichkeit
$\gg \frac{1}{2}$ wird.

## BPP
PP mit Wahrscheinlichkeit $\geq \frac{2}{3}$

## ZPP
### Monte-Carlo-Form
Entscheidungsprobleme, für die ein im Worst-Case polynom. Monte Carlo Algorithmus existiert, der JA- **und** NEIN-Instanzen jeweils mit Wahrscheinlichkeit $w \geq \frac{1}{2}$ korrekt erkennt, und sonst "k.A." antwortet.
### Las-Vegas-Form
Entscheidungsprobleme, für die ein Las Vegas Alg. mit erwartet polynomieller Laufzeit existiert, der JA- und NEIN-Instanzen **immer** korrekt erkennt.

Korrektheit | immer polynomiell | wahrscheinlich polynomiell
--- | --- | --- |
immer | deterministisch polynomielle Algorithmen | Las-Vegas (ZPP(LV))
wahrscheinlich | RP, Co-RP, PP, BPP, ZPP(MC) | Atlantic-City
