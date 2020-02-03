---
title: Bootstrap Methode
---
## Beispiel
Gegeben Zahlungsreihen von Anleihen:
- A: $\{-990.91; 1090\}$
- B: $\{-933.65; 80; 1080\}$
- x: $\{-822.98; 70; 70; 1070\}$

Bestimmung der Kassazinssätze über die Bewertungsformel für Kupon-Anleihen.

$i(0, 1)$: $\frac{1090}{1+i(0, 1)} = 990.91 \Leftrightarrow i(0, 1) = 0.10$

> $i(0, 1)$ wird zuerst gelöst und kann dann in Formel für $i(0, 2)$ eingesetzt werden

$i(0, 2)$: $\frac{80}{1+i(0, 1)} + \frac{1080}{(1+i(0, 2))^2} = 933.65 \Leftrightarrow i(0, 2) = 0.12$

$i(0, 3)$: $\frac{70}{1+i(0, 1)} + \frac{70}{(1+i(0, 2))^2} + \frac{1070}{(1+i(0, 2))^3} = 822.98 \Leftrightarrow i(0, 3) = 0.15$

$\Rightarrow$ Normale Zinsstrukturkurve