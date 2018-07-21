// server.js file
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/NewsApp'));
// Start the app by listening on the default
// Heroku port
console.log("directory =",__dirname + '/dist/NewsApp');
console.log("Port = ",process.env.PORT );
app.listen(process.env.PORT || 8080);
//app.listen(3000);