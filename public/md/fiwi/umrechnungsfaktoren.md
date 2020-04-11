---
title: Umrechnungsfaktoren
---
Aufzinsungsfaktor $AUF(i, T) = (1 + i)^T = q^T$
> Betrag, auf den $1GE$ nach $T$ Jahren anwächst.

Abzinsungsfaktor $AB(i, T) = (1 + i)^{-T} = q^{-T}$
> Betrag, der heute angelegt werden muss, um in $T$ Jahren $1GE$ zu erhalten.

Rentenbarwertfaktor: $RBF(i, T) = \frac{(q^T - 1)}{i * q^T} , i \gt 0$
> Barwert $B$ einer über $T$ Jahre nachschüssig gezahlten Rente $z$ im Zeitpunkt $t = 0$: $B = z * RBF(i, T)$

Kapitalwiedergewinnungsfaktor: $KWF(i, T) = \frac{i * q^T}{(q^T - 1)}$
> Wert einer über $T$ Jahre nachschüssig gezahlten Rente $z$, die aus einem im Zeitpunkt $t=0$ gegebenen Betrag $B$ geleistet werden kann: $z = B * KWF(i, T)$

Endwertfaktor: $EWF(i, T) = (q^T-1)/i, i \gt 0$
> Ermittlung des Endwertes $E$ einer über $T$ Jahre nachschüssig gezahlten Rente $z$: $E = z * EWF(i, T)$

Rückwärtsverteilungsfaktor $RVF(i, T) = \frac{i}{q^T - 1}, i \gt 0$
> Ermittlung einer über $T$ Jahre nachschüssig gezahlten Rente $z$, die aus einem im Zeitpunkt $t = T$ gegebenen Betrag $E$ geleistet werden kann: $z = E * RVF(i, T)$