---
title: Gleichungsverfahren
---
- Für mehrseitige Verflechtungen. Leistungsabgaben und Leistungszugänge werden simultan berücksichtigt.
- Gleichung für jede verflochtene KSt: $\text{Kosten auf KSt} + \text{Summe der von anderen KSt umgelegten Kosten} = \text{Summe der auf alle Kst umgelegten kosten}$

Bei zwei wechselseitig verflochtenen KSt $i$ und $j$:

$$
\text{KSt i: } K_i + v_j * x_{ij} = v_i*x_i\\
\text{KSt j: } K_j + v_i * x_{ji} = v_j*x_j
$$

- $K_i$ Kosten auf KSt $i$
- $v_i$ Verrechnungssätze für Leistungen von KSt $i$
- $x_{ij}$ von $i$ in Anspruch genommene Leistungen von $j$
- $x_i$ gesamte Leistung von KSt $i$

Verallgemeinert:
$$
K_i + \sum^N_{j=1}{(v_j * x_{ij})} = v_i*x_i
$$
