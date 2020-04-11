---
title: Leverage Effekt
---
Erwartungswert der Zahlungen:
- $S$: Menge der möglichen Zustände
- $w(s)$: Eintrittswahrscheinlichkeit für Zustand $s$
- $a(s)$: Auszahlung bei Zustand $s$
$$
\mu = \sum_{s}^{S}w(s)*a(s)
$$

Standardabweichung
$$
\sigma = \sqrt{\sum_{s}^{S}w(s)(*a(s)-\mu)^2}
$$

---

- $\tilde{a} = \tilde{b}_{EK}+b_{FK}$: EZÜ in t=1
- $EK$: in $t=0$ eingesetztes Eigenkapital
- $FK$: in $t=0$ eingesetztes Fremdkapital
- $GK = EK-FK$: in $t=0$ ingesamt eingesetztes Kapital
- $\tilde{r}_{GK}$: Gesamtkapitalrendite (vor Steuern)
- $\tilde{r}_{EK}$: Gesamtkapitalrendite (vor Steuern)
- $r_{FK}$: Fremdkapitalzinssatz
- $\tilde{b}_{EK}$: Ausschüttungen an die Eigenkapitalgeber in t=1
- $b_{FK}$: Zins- und Tilgungszahlungen an die Fremkapitalgeber
- $E[\cdot]$: Erwartungswert
- $Var(\cdot)$: Varianz

$$
\tilde{r}_{GK} = \frac{\tilde{a}}{GK} - 1
$$
> Gesamtkapitalrendite

$$
\tilde{r}_{EK} = \tilde{r}_{GK} + (\tilde{r}_{GK} - r_{FK}) * \frac{FK}{EK}
$$
> Eigenkapitalrendite. Mit $\bar{r}_{GK}$: _erwartete_ Eigenkapitalrendite.

$\bar{r}_{EK}$ ...
- steigt mit wachsendem Verschuldungsgrad, wenn: $\bar{r}_{GK} \gt r_{FK}$
- sinkt mit wachsendem Verschuldungsgrad, wenn: $\bar{r}_{GK} \lt r_{FK}$

$$
\sigma(\tilde{r}_{EK}) = (1+\frac{FK}{EK}) * \sigma(\tilde{r}_{GK})
$$

**Fazit**: Mit wachsendem Verschuldungsgrad steigt die erwartete Rendite es Eigenkapitals (sofern $E[r_{GK}] \gt r_{FK}$), zugleich aber auch das Risiko der Eigenkapitalgeber.
