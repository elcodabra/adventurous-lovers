const compression = require('compression');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8081));

// Gzip
app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use('/', express.static(__dirname + '/dist'));


// Start the app by listening on the default port
app.listen(app.get('port'), function() {
  console.log('Adventurous Lovers listening on port ' + app.get('port'));
});
