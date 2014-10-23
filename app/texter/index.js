var _ = require('lodash');
var twilio = require('twilio');

var C = require('./constants');
var E = require('./errors');

// Because 'new' is dumb
var texterMethods = {
  sendLove: function(number, callback) {
    if (_.isUndefined(number) || number < 999999999) {
      throw new Error(E.BAD_NUMBER); // 10 digits minus 1
    }

    // 'this' is dumb too but whatevs
    return this.sms.messages.create({
      to: '+1' + number,
      from: '+1' + this.sendingPhoneNumber,
      body: 'Sending you some LOVE (And soon pizza!) Thx 4 being u'
    }, function(err, message) {
      if (err) return callback(err);

      console.log('Success! The SID for this SMS message is:', message.sid);
      console.log('Message sent on:', message.dateCreated);

      if (!_.isUndefined(callback)) callback();
    });
  }
};

var makeTexter = function(SID, AUTH) {
  var texter = new twilio.RestClient(SID, AUTH);
  texter.sendingPhoneNumber = C.PHONE;
  return _.extend(new twilio.RestClient(SID, AUTH), texterMethods);
};

module.exports = makeTexter;
