---
title: Genetische Algorithmen
---

```
while not Abbruchkriterium:
    Wähle Eltern sM, sF aus Population
    Generiere Kind sC durch Crossover von sM und sF
    Mutiere sC mit bestimmter Wahrscheinlichkeit
    Setze sC in Poulation
    Hat Population eine bestimmte Größe, reduziere Größe durch Selektion (nach Fitness)
```

## Auswahl der Eltern
- Zufällig
- Nach Fitness
    - Roulette-Prinzip
    - Bestimme `p_i = f_i / ∑(j of Population) f_j`
    - Bestimme `q_i = ∑(j = 1, ..., i) p_j`
    - Wähle erstes i für das Gilt: `q_(i-1) < r <= q_i`, `q_0 = 0`
- Rangbasiert
    - Verteile Ränge, nach absolutem Fitness-Wert (#POP ist das beste, 1 das schlechteste)
    - Bestimme `p_i = r_i / ∑(j of Pop) r_j`
- Turnier
    - Wähle `q` Elemente und lasse diese antreten. Das fitteste gewinnt.

## Selektion
- `(µ, l)`: es werden `l > µ` Kinder generiert. Die besten `l` ersetzen die Eltern.
- `µ + l`: aus allen Eltern und Kindern werden die besten Lösungen gewählt
- Steady-State: beim Einfügen eines Kindes wird eine alte Lösung entfernt (zufällig, wegen Fitness oder Alter)
- Elitestrategie: zusätzlich dafür sorgen, dass beste Lösung erhalten bleibt.

## Kreuzungsoperatoren
### One-Point-Crossover
Wähle `q < n` zufällig. Nehme die ersten q-Vielen Gene (Teile) von sM, die restlichen von sF.
### Two-Point-Crossover
Wähle `q_1, q_2 mit q_2 <= n, q_1 < q_2` zufällig. Nehme alle Gene zwischen q1 und q2 von sM, die restlichen von sF.
### Uniform-Crossover
Wähle zufällige Boolean `E_l für l 1, ..., n`. Ist E_l = 1, übernehme Position l von sM, sonst von sF.

### Bei Reihenfolgen
Fülle Kind mit Teilen von sF, die noch nicht im Kind enthalten sind. Gehe dabei in sF von Vorne nach Hinten.