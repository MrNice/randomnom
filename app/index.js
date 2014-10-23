var _ = require('lodash');
var express = require('express');

var C = require('./constants'); 

var app = express();

// if (C.TWILIO_ID) {
//   var texter = require('./texter')(C.TWILIO_ID, C.TWILIO_AUTH);
//   // Want to just get this out there for tonight so ping knows what's what
//   texter.sendLove(process.env.PING_PHONE, function(err) {
//     if (err) throw err;
//     console.log('Love sent');
//   });
// }

app.set('port', C.PORT);

app.use('/', express.static(__dirname + '/public'));

app.get('/nicholas_test', function(req, res, next) {
  if (!_.isNull(C.MY_PHONE)) {
    texter.sendLove(C.MY_PHONE, function(err) {
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
});

module.exports = app;
