---
title: Bilanzkennzahlen
---
### Profitabilität
#### Gewinnmarge (Standardformel)
Operative Wertschöpfung je erzieltem Umsatzeuro.

$$
\text{GM}_t = \frac{\text{EBIT}_t}{\text{Umsatz}_t}
$$

#### Beschaffungsmarge
Anschaffungskosten aller von Lieferanten bezogenen Gütern und Dienstleistungen je erzieltem Umsatzeuro.

$$
\text{BM}_t = \frac{\text{Beschaffungsvolumen}_t}{\text{Umsatz}_t}
$$

#### Anwendung
Senkung des Beschaffungsvolumens um $x%%$ erhöht EBIT um $y%%$ gemäß:

$$
y = \frac{\text{BM}}{\text{GM}} * x
$$

- Offenbar ist $y \gt x$, solange $\text{BM} \gt \text{GM}$
- Alternativ erfordert eine Erhöhung von EBIT um $y$ eine Umsatzsteigerung von $y$ (wenn GM konstant).

### Gesamtkapitalrendite
- Maß für Rentabilität der operativen Wertschöpfung für Kapitalgeber
  - Nenner: operatives Nettovermögen zu Beginn der Periode
  - Zähler: operative Wertschöpfung der Periode
- Fremdkapital entspricht den verzinslichen Schulden
- Ansatz des Nachsteuer-Zinsaufwands ($s$), da Zinsen steuerlich abzugsfähig sind.
$$
\text{GKR}_t = \frac{\text{Jahresergebnis}_t + (1 - s) * \text{Zinsaufwand}_t}{\text{EK}_{t-1}+\text{Fremdkapital}_{t-1}}
$$

- $U: \text{Umsatzerlöse}$
- $ONV: \text{Operatives Nettovermögen}$
- $GM = \frac{\text{OG}_t}{U_t}$
- Kapitalumschlag: $KU = \frac{U_t}{\text{ONV}_{t-1}}}$

$$
\text{GKR}_t = \frac{\text{OG}_t}{\text{ONV}_{t-1}} = \frac{\text{OG}_t}{U_t} * \frac{U_t}{\text{ONV}_{t-1}} = \text{GM}_t * \text{KU}_t
$$

### Eigenkapitalrendite
- Maß für Rentabilität des investierten Eigenkapitals
- Aussage: durch höheren Fremdkapitaleinsatz wird bei gleichem EK-Einsatz mehr Gewinn erzielt (Leverage Effekt, Leverage-Formel: Seite 20 in Foliensatz 10.).
- Obacht: Durch mehr Fremdkapital auch höheres Risiko.
- Bei geringem operativem Gewinn (und damit kleiner GKR) existiert Risko von keinem bzw. negativem Gewinn.

$$
EKR_t = \frac{\text{Jahresergebnis}_t}{\text{Eigenkapital}_{t-1}}
$$

### Working Capital
- Entspricht dem durchschnittlichen Nettoumlaufvermögen NUV, wobei $NUV_t = \text{Vorräte} + \text{Ford. LuL}_t - \text{Verb. LuL}_t$
- Maß für kurzfristigen Finanzierungsbedarf der laufenden Geschäftstätigkeit

$$
WC_t = \frac{1}{2} (NUV_t + NUV_{t-1})
$$

### Vorratsumschlagsdauer (VUD)
- Inventory Turnover gibt an, wie viele Tage das im Vorrat gebundene Kapital durchschnittlich im Unternehmen verlbeibt

$$
VUD_t = \frac{365 * \frac{1}{2}(\text{Vorräte}_t+\text{Vorräte}_{t-1})}{\text{Umsatzkosten}_t}
$$

### Debitorenumschlagsdauer (DUD)
- Accounts receivable Turnover gibt durchschnittliches Zahlungsziel von Lieferantenforderungen in Tagen an

$$
DUD_t = \frac{365 * \frac{1}{2}(\text{Ford. LuL}_t+\text{Ford. LuL}_{t-1})}{\text{Umsatzkosten}_t}
$$

### Kreditorenumschlagsdauer (KUD)
- Accounts Payable Turnover gibt das durchschnittliche Zahlungsziel von Lieferantenverbindlichkeiten in Tagen an
- Beschaffungsvolumen unbekannt, kann vereinfachend durch Umsatzkosten + Vorratsveränderung ersetzt werden.

$$
DUD_t = \frac{365 * \frac{1}{2}(\text{Verb. LuL}_t+\text{Verb. LuL}_{t-1})}{\text{Beschaffungsvolumen}_t}
$$

### Geldumschlag
- Bezeichnet durchschnittliche Bindungsdauer liquider Mittel im Working Capital

$$
GU_t = VUD_t + DUD_t - KUD_t
$$

### Kurs-Gewinn-Verhältnis (KGV)
- Auch: Price-Earnings-Ratio
- Aktueller Aktienkurs: $p_t$
- Erwarteter Gewinn: $x_{t+1}$

$$
KGV_t = \frac{p_t}{x_{t+1}} 
$$

$x$ muss geschätzt werden. Eine Möglichkeit:
- Aktueller Gewinn $x_t$
- Kapitalkosten $k$
- Aktuelle Dividende: $d_t$
$$
x_{t+1} = (1+k) * x_t - k * d_t
$$

- Grundregel: Bei niedrigem KGV kaufen und bei hohem verkaufen.
- einfacher Vergleichsmaßstab ist Normales KGV: $KGV^N_t = \frac{1}{k}$

anspruchsvollerer Vergleich:

$$
KGV^{OJ}_t = \frac{1}{k}*\frac{g_{t+2}-g}{k-g}
$$

Daten:
- Erwartetes Gewinnwachstum (cum Dividende):
$$
g_{t+2} = \frac{x_{t+2} + k*d_{t+1}}{x_{t+1}} - 1
$$
- Langfristiges Gewinnwachstum $g$ (z.B. Rate des Wirtschaftswachstums - etwa 2%)

### Laufendes Kurs-Gewinn-Verhältnis
$$
KGV^T_t = \frac{p_t+d_t}{x_t}
$$

Obacht:
- Aktienkurs mit Dividende, da Ausschüttung zu Kurssenkung führt, aber Gewinn nicht beeinflusst.
- Unklar, welche Berechnung den Angaben in der Presse zugrundeliegt
- Empfehlung: Finger weg vom laufenden KGV und besser selber ausrechnen
