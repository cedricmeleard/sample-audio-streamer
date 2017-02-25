/**
 * Created by cedric on 24/02/17.
 */
var socket = io();

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

socket.on('speak', (fileStream) => {
    if (fileStream.length === 0)
        return;

    context.decodeAudioData(fileStream, (buffer) => {
        // Fix up prefixing
        let source = context.createBufferSource(); // creates a sound source
        source.buffer = buffer;                    // tell the source which sound to play
        source.connect(context.destination);       // connect the source to the context's destination (the speakers)
        source.start(0);                           // play the source now
    });
});

