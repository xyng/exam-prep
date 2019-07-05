---
title: NDEA zu DEA
---
- Sei $S_{start} \in w^Z$ Menge aller Zustände, die von $Z_{start}$ über $\varepsilon$-Kanten erreicht werden können. Erstelle Startzustand $Y_{S_{start}}$.

- $a$-Übergang ($\forall a \in \Sigma$) von $Y_{S}$ nach $Y_{S'}$ wenn $S'$ *genau alle* Zustände enthält, die von $S$ aus über einen $a$-Übergang, gefolgt von $\varepsilon$-Übergängen erreicht werden können.

- $Y_{S}$ ist ein Endzustand, wenn $S \cap Z_{end} \neq \emptyset$