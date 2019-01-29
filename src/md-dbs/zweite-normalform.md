Ein Attribut, das Teil von keinem Schlüsselkandidaten ist heißt `Nichtprimärattribut`.

Für das Schema R muss gelten: Alle Nichtprimärattribute A aus R sind voll funktional abhängig von jedem Schlüsselkandidaten.
Oder: Es gibt keine Nichtprimärattribute.

Transformation:

Beispiel:

_Student_ | _Thema_ | Geburtsdatum
--- | --- | --- |
Ernst | SQL | 01.01.1980
Kevin | SQL | 01.01.1983

Schlüsselkandidat: `{ Student, Thema }`

Nichtprimärattribut: `Geburtsdatum`

Das Geburtsdatum ist aber nicht voll funktional abhängig vom Schlüsselkandidaten, da es bereits voll funktional abhängig von einer Teilmenge ("Student") von diesem ist.

&rarr; Das Schema muss aufgebrochen werden in:

_Student_ | Geburtsdatum
--- | ---
Ernst | 01.01.1980
Kevin | 01.01.1983

_Student_ | Thema
--- | --- |
Ernst | SQL
Kevin | SQL