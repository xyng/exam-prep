Alice, Bob.
Alice sendet `n, g, a = g^x mod n` an Bob. `x` ist eine (große) Primzahl und bleibt nur bei Alice.
Bob wählt `y` (große Primzahl) und sendet `b = g^y mod n` an Alice zurück.
Bob berechnet `sb = a^y mod 47`
Alice berechnet `sa = b^x mod 47`

`sa = sb`. Dies ist Alice' und Bobs `Shared Secret`.

Dieses Verfahren schützt nicht vor Man-In-The-Middle Angriffen. Dieser könnte selbst einen Wert `z` wählen, und Nachrichten zwischen Alice und Bob unbemerkt mitlesen.