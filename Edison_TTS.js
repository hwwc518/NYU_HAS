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
var audio = text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav'));
audio.play;
