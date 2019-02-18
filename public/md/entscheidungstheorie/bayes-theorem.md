---
title: Bayes Theorem
---
$$
w(S_{s} | y_{i}) = \frac{w(y_{i} | S_{s}) * w(S_{s})}{w(y_{i})}
$$

$$
w(y_{i}) = \sum_{s=1}^S w(y_{i} | S_{s}) * w(S_{s})
$$

Key | Value
--- | ---
$ y_{i} $ | Information $ i = 1, .. , I $
$ w(S_{s}) $ | a-priori-Wahrscheinlichkeitsurteil des Entscheiders
$ w(y_{i} \| S_{s}) $ | Bedingte Eintrittswahrscheinlichkeit im a-priori-Urteil des Entscheiders für das Informationsergebnis $ y_{i} $, gegeben $ S_{s} $ (hypothetisch!). („Likelihoods“, „Randwahrscheinlichkeiten“)
$ w(y_{i}) $ | Unbedingte Eintrittswahrscheinlichkeit für das Informationsergebnis $ y_{i} $ (a priori)
$ w(S_{s} \| y_{i}) $ | Bedingte a-posteriori-Eintrittswahrscheinlichkeit für den Zustand $ S_{s} $ nach Eingang der Information $ y_{i} $