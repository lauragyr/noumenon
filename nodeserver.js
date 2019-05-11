const server = require('http').createServer();
const io = require('socket.io')(server);
const fs = require('fs');



io.on('connection', client => {
    client.on('event', data => {
        console.log(data);
        fs.writeFile("test.json", data, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    });
    client.on('disconnect', () => {
        /* … */ });
});
server.listen(3000);