var _ = require('lodash');
var twilio = require('twilio');
        
const PING_PHONE = process.env.PING_PHONE;

// Because 'new' is dumb
var texterMethods = {
  sendLove: function(number, callback) {
    if (_.isUndefined(number) || number < 999999999) return; // 10 digits minus 1

    // 'this' is dumb too but whatevs
    return this.sms.messages.create({
      to: '+1' + number,
      from: '+1' + process.env.PHONE,
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
  return _.extend(new twilio.RestClient(SID, AUTH), texterMethods);
};

module.exports = makeTexter;
