var _ = require('lodash');
var express = require('express');

const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_AUTH = process.env.TWILIO_AUTH; 

var app = express();

if (process.env.TWILIO_ID) {
  var texter = require('./texter')(TWILIO_ID, TWILIO_AUTH);
  // Want to just get this out there for tonight so ping knows what's what
  texter.sendLove(process.env.PING_PHONE, function(err) {
    if (err) throw err;

    console.log('Love sent');
  });
}

app.set('port', (process.env.PORT || 5000))

app.use('/', express.static(__dirname + '/public'));

app.get('/nicholas_test', function(req, res, next) {
  if (!_.isUndefined(process.env.MY_PHONE)) {
    texter.sendLove(process.env.MY_PHONE, function(err) {
      if (err) {
        console.log(err);
        return res.send('lolnope');
      }

      console.log('LOVE SENT');
      res.send('LOVE SENT');
    });
  } else {
    res.send('lolnope');
  }
})

module.exports = app;
