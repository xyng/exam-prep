### Session Hijacking
`Man-in-the-Middle`-Position unwahrscheinlich. Snooping daher meist nicht möglich.

Aber `Blind Spoofing`. Angreifer kann relevante Parameter erraten.
z.B. wenn Ports inkrementell steigen, ISNs eine fixe Differenz haben, Start-Werte zuverlässig festgestellt werden können.

Antworten auf gespoofte Pakete werden allerdings an den *ursprünglicheb* Partner gesendet.
&rarr; Diesen unverfügbar machen. Via Syn Flooding.

Angreifer führt 3-Way-Handshake aus. Bei standard-Linux-Systemen bleibt das Socket 189 Sekunden im Status `SYN_RECV` und blockiert Ressourcen. Beim Angreifer werden wiederum keine Ressourcen blockiert.

#### TCP DoS Protection
Generell: schwer. Jedes Paket gehört zunächst zu einem für den Server legitim erscheinendem Request.

Naive herangehensweise: Viele Requests vom selben Client blocken.
Konter: Distributed DoS. &rarr; Viele Pakete von vielen Clients.

SYN Cookies. Hash von `Source and Destination Port, Client IP and a Server-Chosen Secret` bilden. Dieser ist nun ISN (Initial Sequence Number) für SYN Pakete.

Buchhaltung über halboffene Verbindungen so nicht notwendig. Ressourcen müssen nicht blockiert werden.