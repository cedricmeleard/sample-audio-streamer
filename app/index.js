var fs = require('fs');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//express conf
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//socket io event
io.on('connection', function (socket) {
    socket.on('save', function (soundStream) {
        //save sound file
        //fs.writeFile(__dirname + "/temporary/soundFile.wav", soundStream, (err) => {
        //    if (err)
        //        console.log(err);
        //    else
                io.emit('speak', soundStream);
        //});
    });
});

//express routing
var router = express.Router();
//basic home rediection
router.get('/', function (req, res) {
    res.redirect('speaker/index.html');
});

router.get('/player', function (req, res) {
    res.redirect('player/index.html');
});
//set router as default router
app.use(router);

//start server
http.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



