# BA project Laura

Liveserver im Terminal starten

```bash
cd /ins_verzeichnis/BA
npm run tablet
```

BA-Ordner öffnen in Visual Studio Code.
IP Adresse herausfinden und in questionnaire.js Zeile 2 eingeben

Nodeserver starten in Visual Studio Code (läuft auf Port 3000):
cd /ins_verzeichnis/BA

```bash
npm run server
```

## Ablauf

  - fragebogen.html im Browser öffnen, evtl. IP Adresse einstellen!
  - Socket.io schickt messages über events (https://socket.io/docs/ Sending and receiving events)
  - nodeserver.js bekommt Message und schreibt ins data.json File
  - index.html (+sketch.js mit p5) "pollt" json File und wenn neuer Eintrag kommt, zeichnet was Neues.
