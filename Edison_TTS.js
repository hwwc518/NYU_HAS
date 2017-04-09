var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

var text_to_speech = new TextToSpeechV1({
  username: '8f48ee97-95f8-4017-bbf6-f21eb6283fa4',
  password: 'otOagxxR4xHb'
});

var params = {
  text: 'Hello from IBM Watson',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
};

// Pipe the synthesized text to a file
text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));

var play = require('play')//.Play();
play.sound('output.wav');
// play with a callback
// play.sound('./wavs/sx/intro.wav', function(){
//
//   // these are all "fire and forget", no callback
//   play.sound('./wavs/sfx/alarm.wav');
//   play.sound('./wavs/sfx/crinkle.wav');
//   play.sound('./wavs/sfx/flush.wav');
//   play.sound('./wavs/sfx/ding.wav');
//
// });

//If you want to know if this can't play for some reason
// play.on('error', function () {
//   console.log('I can't play!');
// });
//var audio = new Audio('output.wav');
//audio.play();
