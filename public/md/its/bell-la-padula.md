Partielle Ordnung `<=`. Behandelt *Confidentiality*. Es gibt Nutzer `U` und Objekte `X`, die jeweils eine Sicherheitseinstufung `L(U)` bzw `L(X)` haben.

Nutzer können nur Dokumente lesen, für die gilt: `L(X) <= L(U)`. (No read up - verhindert durchsickern von Informationen)

Nutzer können nur Dokumente schreiben, für die gilt: `L(U) <= L(X)`. (No write down - aufbereitete Informationen haben ggf. höhere Stufe als Verfasser)