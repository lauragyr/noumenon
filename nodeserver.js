const server = require('http').createServer();
const io = require('socket.io')(server);
const fs = require('fs');



io.on('connection', client => {
    client.on('answers', (a1, a2, a3, a4, a5, a6) => {
        let data2file = {
            "antwort1": a1,
            "antwort2": a2,
            "antwort3": a3,
            "antwort4": a4,
            "antwort5": a5,
            "antwort6": a6,
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