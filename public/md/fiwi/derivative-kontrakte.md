---
title: Märkte für Derivative Kontrakte
---
## Terminkontrakte
Ein Vertragspartner verpflichtet sich zur Lieferung bestimmter Finanzierungstitel in einem zukünftigen Zeitpunkt, der andere Vertragspartner verpflichtet sich zur Zahlung eines heute vertraglich fixierten Kaufpreises (`Terminpreis`) im gleichen Zeitpunkt.

$S_T$: Wert des Underlyings zum Zeitpunkt $T$

**Forward long Position** (= Termin_käufer_)
> Ist verpflichtet, im Erfüllungszeitpunkt $T$ das Underlying zum Terminpreis $F(t,T)$ zu kaufen
Payoff: $S_T-F(t,T)$

**Forward short Position** (= Termin_verkäufer_)
> Ist verpflichtet, im Erfüllungszeitpunkt $T$ das Underlying zum Terminpreis $F(t,T)$ zu verkaufen
Payoff: $F(t,T)-S_T$

## Optionskontrakte
### Kaufoption (Call)
Optionsinhaber erwirbt vom Stillhalter das Recht, zu einem zukünftigen Zeitpunkt (europäische Option) oder Zeitraum (amerikanische Option) bestimmte Finanzierungstitel zu einem heute vertraglich fixierten Preis $K$ zu kaufen.

**Long Call Position**
> Hat das Recht zu kaufen

**Short Call Position**
> Ist verpflichtet zu verkaufen, wenn Long Call das Recht ausübt.

Pay-off: $max\{0; S_T-K\}$

### Verkaufsoption (Put)
Der Optionsinhaber erwirbt vom Stillhalter des Recht, bestimmte Finanzierungstitel zu einem heute fixierten Preis $K$ an den Stillhalter zu verkaufen.

**Long Put Position**
> Hat das Recht zu verkaufen

**Short Put Position**
> Ist verpflichtet zu kaufen, wenn Long Call das Recht ausübt.

Pay-off: $max\{0; K - S_T\}$