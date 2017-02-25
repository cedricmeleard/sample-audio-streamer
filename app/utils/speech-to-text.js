/**
 * Created by cedric on 24/02/17.
 */
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speech_to_text = new SpeechToTextV1({
    username: '<username>',
    password: '<password>'
});

var params = {
    // From file
    audio: fs.createReadStream('../temporary/soundFile.wav'),
    content_type: 'audio/l16; rate=44100'
};

speech_to_text.recognize(params, function(err, res) {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(res, null, 2));
});