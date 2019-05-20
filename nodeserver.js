const server = require('http').createServer();
const io = require('websocket.io')(server);
const fs = require('fs');



io.on('connection', client => {
    client.on('answers', (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => {
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
            "antwort15": a15,
            "antwort16": a16,
            "antwort17": a17,
        };
        
        fs.writeFile("data.json", JSON.stringify(data2file), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("writing to file: " + JSON.stringify(data2file));
        });
    });

    client.on('disconnect', () => {
        /* … */
    });
});

server.listen(3000);