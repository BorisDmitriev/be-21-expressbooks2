**Alte Aufgabe:**
```markdown
# BE-Mongoose-Express-Books

## Beschreibung

Erstellen Sie ein Buchverwaltungssystem mit Express und MongoDB. Das System ermöglicht das Hinzufügen von Büchern sowie das Löschen aller Buchdaten.

## Was Sie tun werden

Sie werden eine Express-Anwendung erstellen und mit einer MongoDB-Datenbank verbinden. Anschließend implementieren Sie die Routen und Controller für das Hinzufügen von Büchern und das Löschen aller Buchdaten.

## Aufgaben

**Aufgabe 1: Express-Anwendung einrichten**

-   Arbeiten Sie in der Datei `server.js` welcher als Einstiegspunkt für die Anwendung fungiert.
-   Importieren Sie die erforderlichen Module: `express` und `mongoose`.
-   Verbinden Sie die Anwendung mit der MongoDB-Datenbank `booksDB` (URL: `mongodb://127.0.0.1:27017/booksDB`).
-   Konfigurieren Sie die Anwendung, um JSON-Anfragen zu parsen.
-   Definieren Sie eine Basisroute `/books` für Buchoperationen.
-   Starten Sie den Server auf Port 3000.

**Aufgabe 2: Buchmodell definieren**

-   Erstellen Sie eine Datei `models/book.schema.js` und definieren Sie das Schema für ein Buch.
-   Das Buchschema sollte die folgenden Felder enthalten:
    -   `title` (String, erforderlich)
    -   `author` (Subschema, erforderlich)
        -   `firstName` (String, erforderlich)
        -   `lastName` (String, erforderlich)
    -   `genre` (String, erforderlich)
    -   `year` (Number, erforderlich)
-   Exportieren Sie das Buchmodell.

**Aufgabe 3: Datenbanklogik für das Buch implementieren**

-   Erstellen Sie eine Datei `models/book.model.js`.
-   Importieren Sie das Buchmodell.
-   Implementieren Sie die Funktion `addBook`, um ein neues Buch zur Datenbank hinzuzufügen.
    -   Die Funktion sollte die Parameter `title`, `author`, `genre` und `year` akzeptieren.
    -   Erstellen Sie eine neue Instanz des Buchmodells mit den übergebenen Werten.
    -   Speichern Sie das Buch in der Datenbank.
    -   Geben Sie ein Promise zurück, das das gespeicherte Buch enthält.
-   Exportieren Sie die Funktion `addBook`.

**Aufgabe 4: Controller für Buchoperationen implementieren**

-   Erstellen Sie eine Datei `controllers/book.controller.js`.
-   Importieren Sie die Funktion `addBook` aus `models/book.model.js`.
-   Implementieren Sie den Controller `httpAddBook`, um ein neues Buch hinzuzufügen.
    -   Der Controller sollte die Anfrageparameter `title`, `author`, `genre` und `year` verwenden.
    -   Rufen Sie die Funktion `addBook` auf und übergeben Sie die Parameterwerte.
    -   Bei erfolgreichem Hinzufügen des Buches senden Sie eine Erfolgsmeldung mit dem Statuscode 201 zurück.
    -   Bei einem Fehler beim Hinzufügen des Buches senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
-   Exportieren Sie den Controller `httpAddBook`.

**Aufgabe 5: Implementieren Sie Routen für Buchoperationen**.

- Erstellen Sie eine Datei `routes/book.routes.js`.

- Importieren Sie den `httpAddBook` Controller aus `controllers/book.controller.js`.
- Definieren Sie die POST-Route `/add`, um ein neues Buch hinzuzufügen.
- Verwenden Sie den `httpAddBook`-Controller als Handler für die POST-Route.
- Exportiere den Router.

**Aufgabe 6: Implementieren Sie die Datenbanklogik für das Buch**.

- Bearbeiten Sie die Datei `models/book.model.js`.
- Implementieren Sie die Funktion `purgeBooks`, um alle Buchdaten zu löschen.
    - Rufen Sie die Funktion `deleteMany` für das Buchmodell auf, um alle Bücher zu löschen.
- Exportieren Sie die Funktion "purgeBooks".


**Aufgabe 7: Implementieren Sie eine Route zum Löschen aller Buchdaten**.

- Bearbeiten Sie die Datei `controllers/book.controller.js`.
- Implementieren Sie den `httpPurgeBooks` Controller, um alle Buchdaten zu löschen.
- Importieren Sie die Funktion `purgeBooks` aus `models/book.model.js`.
    - Rufen Sie die Funktion `purgeBooks` für das Buchmodell auf, um alle Bücher zu löschen.
    - Wenn die Buchdaten erfolgreich gelöscht wurden, senden Sie eine Erfolgsmeldung mit Statuscode 200 zurück.
    - Tritt beim Löschen der Buchdaten ein Fehler auf, senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
- Exportieren Sie den Controller `httpPurgeBooks`.


**Aufgabe 8: Implementieren Sie Routen zum Löschen aller Buchdaten**.

- Bearbeiten Sie die Datei `routes/book.routes.js`.
- Importieren Sie den Controller `httpPurgeBooks` aus `controllers/book.controller.js`.
- Definieren Sie die DELETE-Route `/purgeBooks`, um alle Buchdaten zu löschen.
- Verwenden Sie den `httpPurgeBooks`-Controller als Handler für die DELETE-Route.
- Exportieren Sie den Router.
```

Bitte hier einfach weiter machen:
**Neue Aufgabe:**
**Aufgabe 9: Implementieren der `findById`-Funktion im Buchmodell.**

- Bearbeite die Datei `models/book.model.js`.
- Importiere das Buchmodell.
- Implementiere die `findById`-Funktion, um ein Buch anhand seiner ID abzurufen.
  - Die Funktion sollte den Parameter `id` akzeptieren.
  - Verwende die `findById`-Methode des Buchmodells, um das Buch mit der entsprechenden ID zu finden.
  - Gib eine Promise zurück, die das gefundene Buch enthält.
- Exportiere die `findById`-Funktion.

**Aufgabe 10: Implementieren einer Route zum Abrufen eines Buchs anhand seiner ID.**

- Bearbeite die Datei `controllers/book.controller.js`.
- Implementiere den `httpGetBookById`-Controller, um ein Buch anhand seiner ID abzurufen.
- Die Funktion `httpGetBookById` sollte den Request-Parameter `id` verwenden.
- Importiere die Funktion `findById` aus `models/book.model.js`.
- Rufe die `findById`-Funktion in `httpGetBookById` auf und übergebe die `id` als Parameter.
- Wenn das Buch gefunden wird, sende das Buch als JSON-Antwort mit dem Statuscode 200.
- Wenn das Buch nicht gefunden wird, sende eine Fehlermeldung mit dem Statuscode 404.
- Exportiere den `httpGetBookById`-Controller.

**Aufgabe 11: Implementieren der Route zum Abrufen eines Buchs anhand seiner ID.**

- Bearbeite die Datei `routes/book.routes.js`.
- Importiere den `httpGetBookById`-Controller aus `controllers/book.controller.js`.
- Definiere die GET-Route `/:id`, um ein Buch anhand seiner ID abzurufen.
- Verwende den `httpGetBookById`-Controller als Handler für die GET-Route.

Nachdem du diese Aufgaben in der angegebenen Reihenfolge abgeschlossen hast, kannst du die `findById`-Funktion verwenden, um ein Buch anhand seiner ID abzurufen. Die Funktion wird in der Route `/books/:id` verwendet.

**Aufgabe 12: Implementieren der `getAllBooks`-Funktion im Buchmodell.**

- Bearbeite die Datei `models/book.model.js`.
- Implementiere die `getAllBooks`-Funktion, um alle Bücher abzurufen.
  - Die Funktion sollte keine Parameter akzeptieren.
  - Verwende die `find`-Methode des Buchmodells, um alle Bücher abzurufen.
  - Gib eine Promise zurück, die alle gefundenen Bücher enthält.
- Exportiere die `getAllBooks`-Funktion.

**Aufgabe 13: Implementieren des `httpGetAllBooks`-Controllers zum Abrufen aller Bücher.**

- Bearbeite die Datei `controllers/book.controller.js`.
- Importiere die `getAllBooks`-Funktion aus `models/book.model.js`.
- Implementiere den `httpGetAllBooks`-Controller, um alle Bücher abzurufen.
- Rufe die `getAllBooks`-Funktion des Buchmodells auf, um alle Bücher abzurufen.
- Wenn Bücher gefunden werden, sende die Bücher als JSON-Antwort mit dem Statuscode 200.
- Wenn keine Bücher gefunden werden, sende eine leere Liste als JSON-Antwort mit dem Statuscode 200.
- Exportiere den `httpGetAllBooks`-Controller.

**Aufgabe 14: Implementieren von Routen zum Abrufen aller Bücher.**

- Bearbeite die Datei `routes/book.routes.js`.
- Importiere den `httpGetAllBooks`-Controller aus `controllers/book.controller.js`.
- Definiere die GET-Route `/books`, um alle Bücher abzurufen.
- Verwende den `httpGetAllBooks`-Controller als Handler für die GET-Route.

Nachdem du diese Aufgaben in der gegebenen Reihenfolge abgeschlossen hast, hast du die Funktionalität, um alle Bücher mit der Route `/books` abzurufen. Der `httpGetAllBooks`-Controller wird diese Route behandeln und alle Bücher als JSON-Antwort zurückgeben.

