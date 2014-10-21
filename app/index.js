var _ = require('lodash');
var express = require('express');

const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_AUTH = process.env.TWILIO_AUTH; 

var app = express();
var texter = require('./texter')(TWILIO_ID, TWILIO_AUTH);

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
