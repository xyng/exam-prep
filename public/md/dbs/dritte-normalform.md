Für Schema R muss gelten: Es gibt kein Nichtprimärattribut, das nicht-transitiv von jedem Schlüsselkandidaten abhängig ist.

(&rarr; Nichtprimärattribute dürfen untereinander keine Abhängigkeiten haben)

#### Beispiel

Vorliegendes Schema in 2. NF:

_Student_ | UniName | UniUrl
--- | --- | --- |
Ernst | Uni Osnabrück | uos.de
Klaus | Uni Osnabrück | uos.de
Paul | Uni Paderborn | uni-paderborn.de

`UniName` ist voll funktional abhängig von `Student`, aber `UniURL` ist voll funktional abhängig von `UniName`.
Damit ist `UniURL` transitiv abhängig von `UniName`.

&rarr; Schema muss aufgebrochen werden, um transitive Abhängigkeit aufzulösen:

_Student_ | UniName |
--- | --- |
Ernst | Uni Osnabrück
Klaus | Uni Osnabrück
Paul | Uni Paderborn

_UniName_ | UniUrl
--- | --- |
Uni Osnabrück | uos.de
Uni Osnabrück | uos.de
Uni Paderborn | uni-paderborn.de