const server = require('http').createServer();
const io = require('socket.io')(server);
const path = require("path");
const fs = require('fs');
const http = require("http");
const {
  exec
} = require('child_process');

const express = require("express");
const bodyParser = require('body-parser')

io.on('connection', client => {
  client.on('answers', (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) => {
    let data2file = {
      "antwort1": a1,
      "antwort2": a2,
      "antwort3": a3,
      "antwort4": a4,
      "antwort5": a5,
      "antwort6": a6,
      "antwort7": a7,
      "antwort8": a8,
      "antwort9": a9,
      "antwort10": a10,
      "antwort11": a11,
      "antwort12": a12,
      "antwort13": a13,
      "antwort14": a14,
    };

    fs.writeFile("data.json", JSON.stringify(data2file), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("writing to file: " + JSON.stringify(data2file));
    });
  });

});

server.listen(3000);



/*

IMAGE UPLOAD

*/

const handleError = (err, res) => {
  console.log(err);
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};



const app = express();
const httpServer = http.createServer(app);
const PORT = 4000;

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post(
  "/upload",
  (req, res) => {

    const targetPath = path.join(__dirname, "./uploads/" + (new Date().toISOString()) + ".png");
    var base64Data = req.body.image.split(';base64,').pop();

    fs.writeFile(targetPath, base64Data, {
      encoding: 'base64'
    }, err => {
      if (err) return handleError(err, res)
      console.log("file written", targetPath)
      console.log('lpr ' + targetPath + ' -o fit-to-page')
      exstec('lpr ' + targetPath + ' -o fit-to-page', (err, stdout, stderr) => {
        if (err) {
          console.log("ups", err)
          return;
        }

        console.log("printing")
      });

      res
        .status(200)
        .end();
    });

  }
);