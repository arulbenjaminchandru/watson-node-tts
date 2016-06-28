var express=require("express");
var app = express();
var fs=require("fs");
var watson = require('watson-developer-cloud');
app.get("/",function(req,res){
var text_to_speech = watson.text_to_speech({
  username: '<username>',
  password: '<password>',
  version: 'v1'
});
var params = {
  text: 'Turkish Prime Minister Binali Yildirim today reversed an earlier offer of compensation to Russia for shooting down one of Moscow military jets in November, media reported.',
  voice: 'en-US_AllisonVoice',
  accept: 'audio/wav'
};

// Pipe the synthesized text to a file.
text_to_speech.synthesize(params).pipe(fs.createWriteStream('lorem_ipsum.wav'));
});

app.listen(9000);