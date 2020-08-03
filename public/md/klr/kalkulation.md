---
title: Kalkulation
---
- Kostenträger: Am Markt angebotene Produkte
- Herstellkosten: Materialkosten + Fertigungskosten
- Selbstkosten: Herstellkosten + Verwaltungskosten + Vertriebskosten
- Deckungsbeitrag: Fixkosten, die durch Produkt gedeckt werden = $\text(Erlös) - k_{var}$

### Klassische Preiskalkulation auf Basis der Selbstkosten
$$
\text{Selbstkosten} + \text{Gewinn (\% der Selbstkosten)}\\
= \text{Zielverkaufspreis} - \text{Rabatt}\\
= \text{Netto-Verkaufspreis} + \text{UsSt}\\
= \text{Brutto-Verkaufspreis}
$$

### Klassische Ermittlung der Selbstkosten
$$
\text{Materialkosten} (= MEK + z_M * MGK)\\
+ \text{Fertigungskosten} (= FEK + z_F * FGK)\\
= \text{Herstellkosten}\\
+ \text{Vertriebskosten} (= VTEK + z_{VT} * VTGK)\\
+ \text{Verwaltungskosten} (= z_{VW} * VWGK)\\
= \text{Selbstkosten}
$$

### Divisionsrechnung
Wenn es nur eine Produktart gibt.

$$
\text{Stückkosten} = \frac{\text{GK}}{\text{Menge}}
$$

- Keine unterscheidung in Kostenarten, EK oder GK
- Keine Kostenstellen

Bei mehreren Fertigungsstufen (mehrstufige Divisionsrechnung):
- Stückkosten auf jeder Stufe berechnen und aus Stückkosten der Vorstufe sowie anfallenden Kosten Stückkosten bestimmen
- Weiterverechnung der Stückkosten auf der nächsten Stufe

### Äquivalenzziffernrechnung
Bei mehreren, ähnlichen Produktarten.

Vorgehen:
1. Identifikation eines Basisprodukts.
2. Äquivalenzziffer eines anderen Produktes in Bezug auf Basisprodukt bestimmen.
  - z.B. Basisprodukt Gewicht: 2,7g. Produkt B Gewicht: 8,1g.
  - Äquivalenzziffer: $8,1 / 2,7 = 3,0$

Grundproblem: Besteht wirklich eine Äquivalenz?

$$
\text{Stückkosten} = \text{Basiskosten} * \text{Äquivalenzziffer}
$$

### Zuschlagsrechnung
Auf Kostenstellenrechnung aufbauend.

Bei mehreren Produkten in mehreren Fertigungsstufen.

- Trennung der Kosten in EK und GK
  - EK werden Kostenträgern möglichst verursachungsgerecht zugeordnet
  - Zuschläge für GK. Implikation: EK proportional zu GK: Werden 10% der EK getragen, werden auch 10% der GK getragen.
  - Zuschlagssatz bestimmt wie viel Euro je Einheit der Bezugsgröße zugeschlagen werden.

$$
\text{Stückkosten} = EK + \sum_i{\text{Bezugsgröße}_i * \text{Zuschlagssatz}_i}
$$

### Maschinensatzrechnung
Bei hohem Automatisierungsgrad und dadurch hohem Anteil von Maschinenkosten.

$$
\text{Stückkosten} = EK + \sum_i{\text{Maschinenstunden}_i * \text{Zuschlagssatz}_i}
$$

### Was benutzt man wann?
Fertigungsart | Beispiel | Verfahren
--- | --- | ---
Massenfertigung | Zement, Strom | Divisions- oder Äquivalenzrechnung
Sortenfertigung | Getränke, Süßwaren | Divisions- oder Äquivalenzrechnung
Serienfertigung | Autos, Möbel | Zuschlagsrechnung, Maschinensatzrechnung
Einzelfertigung | Großanlagen, Schiffe | Zuschlagsrechnung, Maschinensatzrechnung

### Kuppelproduktion
Wenn bei Produktion Nebenprodukte abfallen, die ebenfalls abgesetzt werden.

#### Restwertrechnung
- Aufteilung in Haupt- und Nebenprodukte
- Kalkulation der Kosten für Hauptprodukte
- Erlöse von Nebenprodukten werden als kostensenkung berücksichtigt
- Ansonsten: Anwendung der üblichen Verfahren zur Kalkulation

#### Verteilungsrechnung
- Alle Produkte als Hauptprodukte behandeln
- GK nach Schlüssel (z.B. Menge) verteilen
- Im Grunde Äquivalenzziffernrechnung
