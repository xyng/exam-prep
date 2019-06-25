---
title: Axiome
---
## Ordnung
Entscheider kann angeben ob $x_{1} \succ x_{2}$,  $x_{1} \prec x_{2}$ oder $x_{1} \sim x_{2}$

## Transitivität
Die Präferenzen eines Entscheiders sind in dem Sinne konsistent, dass bezüglich beliebiger Ergebnisse $x1$, $x2$ und $x3$ gilt:
- Gilt $x_{1} \succ x_{2}$ und $x_{2} \succ x_{3}$, dann gilt auch $x_{1} \succ x_{3}$
- Gilt $x_{1} \prec x_{2}$ und $x_{2} \prec x_{3}$, dann gilt auch $x_{1} \prec x_{3}$
- Gilt $x_{1} \sim x_{2}$ und $x_{2} \sim x_{3}$, dann gilt auch $x_{1} \sim x_{3}$

## Stetigkeit
Für jedes beliebige Ergebnis $x$ mit $x_{min} < x < x_{max}$ existiert eine Indifferenzwahrscheinlichkeit $0 < w^*(x) < 1$.
Der Entscheider muss immer in der Lage sein, $w*$ anzugeben.
Mit steigender Wahrscheinlichkeit w gibt es einen stetigen Übergang von $x \succ L$ zu $x \prec L$.

## Substitution
Wenn der Entscheider bei der Wahl zwischen einer einfachen Lotterie und einem bestimmten sicheren Ergebnis indifferent ist, dann darf er die Lotterie durch das sichere Ergebnis ersetzen, und umgekehrt.

## Reduktion
Der Entscheider darf mehrstufige Lotterien mittels Durchmultiplizieren und Aufaddieren der Wahrscheinlichkeiten auf einstufige Lotterien reduzieren.

## Monotonie
Wenn zwei einfache Lotterien dieselben beiden möglichen Ergebnisse $x_{max}$ und $x_{min}$ aufweisen, bevorzugt der Entscheider die Lotterie, für die das höhere Ergebnis $x_{max}$ die höhere Wahrscheinlichkeit hat (&rarr; Wahrscheinlichkeitsdominanz).