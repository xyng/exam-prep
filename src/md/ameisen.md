Ameisen wählen Pfad nach Pheromongehalt und Länge.
a = 0 => Nur Heuristik
b = 0 => Nur Pheromon

```
p^k_ij = ((r_ij)^a * (n_ij)^b) / ∑(l of V^k) (r_il)^a * (n_il)^b
```

Ameise k legt auf begangener Kante `dk_ij = 1/L` ab, wobei L die Länge Ihres Weges ist.

Pheromone verdunsten. Daher nach jeder Iteration:
```
q of [0, 1]
r_ij = (1 - q) * r_ij + ∑dk_ij
```