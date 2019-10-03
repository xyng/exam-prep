---
title: Unberechenbare Funktionen
---
## Busy Beaver
$n$-Busy Beaver = Eine TM $M$ mit $n$ Zuständen und $|\Gamma| = 2$ die, bei einem anfangs leeren Band, möglichst viele Schritte (= Zustandsübergänge) ausführt **und hält**.

## Wang Parkett
Gegeben: Eine Menge von nicht-rotierbaren Kachel-Typen.

Frage: Kann man mit den gegebenen Typen eine unendlich große Fläche ausfüllen, sodass nur gleichfarbige Kanten aneinander liegen?
Wenn nur periodische Lösungen existieren würden: ja.
Es gibt aber Instanzen, die nur aperiodische Lösungen erlauben.

## Kolmogorov Komplexität
Gegeben: Programmiersprache $P$ (idR. Turing-vollständig) und Zeichenkette $w$

Gesucht: Kolmogorov Komplexität $K_P(w)$
- = Länge der kürzesten Beschreibung von w mittels P
- = Länge des kürzesten $P$-Programms, das $w$ ausgibt.