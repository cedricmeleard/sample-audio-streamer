const socket = io();
const p5jsExtender = new P5jsSoundFile();
// le frameRate etant a 30 fps, 30 equivaut a 1 seconde de pause
const speachPause = 15;
// volume seuil a ajuster
const volLevel = .1;

let mic, recorder, soundFile; 
let isRecording = false; // mousePress will increment from Record, to Stop, to Play
let pauseLength = 0;

function setup() {
    createCanvas(400, 40);
    background(200);
    fill(0);
    text('Enable mic and click the mouse to begin recording', 20, 20);
    // create an audio in
    mic = new p5.AudioIn();
    // users must manually enable their browser microphone for recording to work properly!
    mic.start();
    // create a sound recorder
    recorder = new p5.SoundRecorder();
    // connect the mic to the recorder
    recorder.setInput(mic);
    // create an empty sound file that we will use to playback the recording
    soundFile = new p5.SoundFile();

    frameRate(30);
}

function draw() {
    background(200);

    //if (state == 0) return;

    let vol = mic.getLevel();
    if (vol < volLevel
        && pauseLength < speachPause 
        && isRecording){
        pauseLength++;
        if (pauseLength == speachPause){
            //la pause dépasse 2 secondes
            //on considère que le speaker a fini sa phrase 
            isRecording = false;
        
            try {
                recorder.stop();
                if (soundFile.buffer) {
                    var soundStream = p5jsExtender.saveSound(soundFile);
                    socket.emit('save', soundStream);
                }
            }
            catch (ex){

            }
        
            fill(0, 127, 0);
            stroke(0);
            ellipse( 380, 20, 20, 20);
        }
    }

    else if (vol >= volLevel) {
        if (!isRecording) 
            recorder.record(soundFile);
        
        isRecording = true;
        pauseLength = 0;
        
        fill(127, 0, 0);
        stroke(0);
        rect(0,0, vol * 370, 40);
        ellipse( 380, 20, 20, 20);
    }
}