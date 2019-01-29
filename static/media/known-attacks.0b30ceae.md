### Spoofing
&rarr; Verwendung von Fake-Identität.

Sender-Informationen sind in Netzwerkprotokollen meist ungeschützt, meist wird einfach dem Sender geglaubt, wer er vorgibt zu sein.

Funktioniert für:
- ARP Spoofing
- DNS spoofing (via cache-poisoning)
- IP spoofing
- Mail spoofing (Mails mit anderer Absenderadresse versenden)

### Brute-Force
Probleme durch Rechenleistung beseitigen. (&rarr; Passwörter. So lange raten, bis treffer)

### Sniffing
Netzwerk-Traffic mitlesen. Setzt zugriff auf Übertragungsmedium voraus.

Bei shared ("oldschool" ethernet, wifi, bluetooth) einfacher als bei dedicated (switched ethernet - zugriff auf switch nötig).

### Denial of Service
Ressourcen im Netz unverfügbar machen.

Angreifer schickt große Datenmengen an Ziel, welches damit überfordert wird.

Methoden:
- TCP Syn Flooding
- UDP packets
- ICMP echo request (z.B. `ping`)
- HTTP requests

### MANET Blackholes
MANET = Mobile Ad Hoc Network

Signal springt über verschiedene Knoten zum Ziel. Angreifer erstellt Knoten, der angibt sehr viele Nachbarn zu haben. Dadurch wird dieser wahrscheinlicher Teil der Hop-Kette. Der Angreifer kann nun Pakete mitlesen, selektiv Pakete "verschlucken", oder Pakete manipuliert weitersenden.

### Wormholes
Mehrere Blackholes tauschen Daten über dritten Kanal miteinander aus. Also ein `Wurmloch`.

### XSS
Nutzer kann beliebige Skripte in die Seite einschleusen (z.B. ungesichertes Gästebuch), die dann bei anderen Nutzern ausgeführt werden.
Lösung: Escaping. Traue niemals dem Client.

Verwandt: `SQL Injection`