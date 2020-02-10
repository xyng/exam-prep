---
title: Optimale Nutzungsdauer
---
Definiert als Optimierungsproblem.

$$
V_0(t) = -A_0 + \sum_{t=1}^T a_t * q^{-t} + L_T * q^{-T}
$$

$$
\max_{T \in \{1, \dots, T_{max}\}} V_0(T)
$$

- $a_t$ EZÜ in Periode $t$
- $L_t$ Nettoliquidationserlös bei Projektende in $t$
- $V_o(T)$ Kapitalwert bei Nutzungsdauer von $T$ Perioden
- $T_{max}$ maximale Projektlaufzeit


### Beispiel
$t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$
--- | --- | --- | --- | --- | --- | --- | ---
$a_t$ | $-150$ | $40$ | $70$ | $40$ | $30$
$L_t$ | $150$ | $125$ | $100$ | $75$ | $50$
$T=1$ | $-150$ | $165$
$T=2$ | $-150$ | $40$ | $170$
$T=3$ | $-150$ | $50$ | $70$ | $115$
$T=4$ | $-150$ | $50$ | $70$ | $40$ | $80$
$T=5$ | $-150$ | $50$ | $70$ | $40$ | $30$ | $65$
$T=6$ | $-150$ | $50$ | $70$ | $40$ | $30$ | $40$ | $20$

$T$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$
--- | --- | --- | --- | --- | --- | ---
$V_0$ | $0$ | $26.86$ | $30.62$ | $28.91$ | $35.12$ | $30.88$

$\Rightarrow$ optimale Nutzungsdauer: $5$ Perioden

### Grenzwertkalkül
Annäherung:
$$
V_0(T) - V_0(T-1) \gt 0 \Leftrightarrow a_T + (L_T-L_{T-1}) - L_{T-1} * i \gt 0
$$

- $a_T$ Zusätzlicher EZÜ durch Weiternutzung
- $(L_T-L_{T-1})$ Verringerung der Liquidationserlöse durch Weiternutzung
- $L_{T-1} * i$ Entgangene Verzinsung durch Weiternutzung

**Entscheidungsregel:** Beende Algorithmus, wenn der Grenzwert das erste mal negativ wird.
**Problem:** erstes lokales Maximum wird gefunden, das muss aber nicht zwangsläufig das globale Maximum sein.
