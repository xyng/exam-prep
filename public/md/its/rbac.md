`RBAC` ist eine Weiterentwicklung von Gruppenbasierter autorisierung.
Sie wird über eine Organisation (Unternehmen), deren Ressourcen (Dokumente, Drucker, Netzwerke) und Nutzer (Angestellte, Zulieferer, Kunden) definiert.

`RBAC` besteht also aus den folgenden Komponenten:

`User`: Entität, die Zugriff auf Ressourcen der Organisation möchte, um Aufgaben durchzuführen. (Menschen, Maschinen, Anwendungen)

`Role`: Sammlung von Nutzern mit ähnlichen Funktionen im Unternehmen. (Personaler, ITler, Reinigungsfachkraft)

`Permission`: Definiert eine zugelassene Methode für den Zugriff auf Ressourcen. Wird über `Role` zu `User` zugeordnet. (`Netzwerkverbindungen aufbauen`, `Datei lesen`)

`Session`: Vorgang bei dem ein `User` das kleinstmögliche Set von `Roles` verwendet um mit den dadurch verfügbaren `Permissions` eine Aufgabe zu erledigen.