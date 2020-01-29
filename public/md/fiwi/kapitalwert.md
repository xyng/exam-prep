---
title: Kapitalwert
---
- Gegenstandswert der Zahlungsreihe
- Gegenwärtige Vermögensmehrung (im Vergleich zur Alternativanlage)

Alle Zahlungen der Investition auf Zeitpunkt $t = 0$ abzinsen und summieren.

$$
a_0 := -A_0
$$
$$
V_0 = \sum_{t=1}^{T} a_t * q^{-t} - A_0 = \sum_{t=0}^{T} a_t * q^{-t}
$$

$$
\xleftarrow{: 1,1^3}
$$

$t$ | $0$ | $1$ | $2$ | $3$ | $4$
--- | --- | --- | --- | --- | ---
$a_t$ | $-1200$ | $368$ | $440$ | $398$ | $456$
Kredit | $334,55 \xleftarrow{:1,1}$ | $-368$ | | |
Kredit | $363,64 \xleftarrow{:1,1^2}$ | | $-440$ | |
Kredit | $299,02 \xleftarrow{:1,1^3}$ | | | $-398$ |
Kredit | $311,45 \xleftarrow{:1,1^4}$ | | | | $-456$
Summe | $108,66 = V_0$ | $0$ | $0$ | $0$ | $0$