Partielle Ordnung `>=`. Behandelt *Integrity*. Es gibt Nutzer `U` und Objekte `X`, die jeweils eine Vertaulichkeitsstufe `L(U)` bzw `L(X)` haben.

Nutzer können nur Dokumente lesen, für die gilt: `L(X) >= L(U)`. (No read down - Kein Aufsteigen von Informationen mit geringerer Vertraulichkeitsstufe, bspw. Fake-News vom Praktikanten sollen nicht vom Chefredakteur als Quelle verwendet werden)

Nutzer können nur Dokumente schreiben, für die gilt: `L(U) >= L(X)`. (No write up - Verfasste Dokumente sind höchstens so vertrauenswürdig wie der Verfasser)