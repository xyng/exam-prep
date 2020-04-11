---
title: Effektivzinssatz
---
Interner Zinsfuß mit einer festverzinslichen (Kupon)-Anleihe verbundenen Zahlungsreihe $a$ mit dem Preis der Anleihe $P(0, a)$ als Anfangsauszahlung.

$$
P(0, a) = \sum_{t=1}^{T}\frac{a_t}{(1+i_{eff}(0, T))^t}
$$

> Anleihenpreis und Zinssatz sind immer gegenläufig

## Beispiel
- Anleihe: Nennwert $1000$. Nominalzins $8\%$ p. a. Jährliche Kuponzahlungen. Laufzeit $3$ Jahre. Endfällige Tilgung. Preis $P(0 ,a) = 936.00$
- Zahlungsreihe: $\{-936; 80; 80; 1080\}$

$$
936 = \frac{80}{(1+i_{eff}(0, 3))} + \frac{80}{(1+i_{eff}(0, 3))^2} + \frac{1080}{(1+i_{eff}(0, 3))^3}
$$
$$i_{eff}(0, 3) = 10.6\%$$

> **Caveat:** von Hand nicht berechenbar. Näherungsformel in Teil C.