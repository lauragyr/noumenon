# BA project Laura

Liveserver starten im Terminal starten

```bash
cd /ins_verzeichnis/
live-server --port=8080 --ignore="*.json" .
```

IP Adresse herausfinden. 

Nodeserver starten (läuft auf Port 3000):

```bash
node nodeserver.js
```

## Ablauf

  - fragebogen.html im Browser öffnen, evtl. IP Adresse einstellen! (```var socket = io('http://localhost:3000');```)
  - Socket.io schickt messages über events (https://socket.io/docs/ Sending and receiving events)
  - nodeserver.js bekommt Message und schreibt ins test.json File
  - index.html (+sketch.js mit p5) "pollt" json File und wenn neuer Eintrag kommt, zeichnet was Neues.
