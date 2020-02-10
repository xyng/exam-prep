---
title: Steuern
---
## Steuerkorrigierter Kalkulationszinsfuß
Steuersatz $s$

Korrigierter Kalkulationszinsfuß: $i*(1-s)$

## Steuerparadoxon
Kapitalwert mit Steuern
$$
V_0^s = \sum_{t=1}^{T} \frac{a_t - s*(a_t-AfA_t)}{(1+i(1-s))^t} - A_0
$$

$V_0^s$ kann sowohl größer als auch kleiner sein, dass $V_0$.
Der Fall $V_0^s \gt V_0$ wird **Steuerparadoxon** genannt.

### Beispiel
Hier: ohne Steuern herrscht indifferenz. Mit Steuern ist das Projekt vorteilhaft.

$t$ | $0$ | $1$ | $2$
--- | --- | --- | ---
$a_t$ | $-100$ | $50$ | $84$
$AfA_t$ | | $50$ | $50$
$R_t$ | | $0$ | $34$
$s * R_t$ | | $0$ | $17$
EZÜ nach Steuern | $-100$ | $50$ | $67$
