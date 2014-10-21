// Heroku's app.json
var app = require('./app/index');
const PORT = app.get('port');

app.listen(PORT, function() {
  console.log('Now working on Port: ' + PORT);
});
