---
title: Fehlerwahrscheinlichkeit Pumpen
---
Gegeben: Algorithmus $\mathcal{A}$ mit $w_N = 1$, $w_J = 1/poly(n)$
Gesucht: Algorithmus $\mathcal{B}$ mit $w_N = 1$, $w_J = 0.99$

Definiere Hilfsalgorithmus $\mathcal{H}$: Führe $\mathcal{A}$ $poly(n)$ oft aus.

Fehlerwahrscheinlichkeit von H: $\mathcal{H} \leq (1-\frac{1}{poly(n)})^{poly(n)} < 1/e$

Algorithmus $\mathcal{B}$: Führe $\mathcal{H}$ $k = 5$ mal aus.

Fehlerwahrscheinlichkeit bei $k$ Ausführungen: $< (\frac{1}{e})^k \leq 0.01$

### Wie kommt man drauf?
Man möchte $w_J = 0.99$ also Fehlerwahrscheinlichkeit $\leq \frac{1}{100} = 0.01$

Suche $k$ sodass: $100 \leq e^k \Rightarrow k \geq ln(100) = 4.605... \Rightarrow k = 5$