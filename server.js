// server.js

const express = require('node_modules/express/lib/express.js');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
console.log("Listening at Port",process.env.PORT);
app.listen(process.env.PORT || 8080);