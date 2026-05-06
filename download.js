const fs = require('fs');
const https = require('https');

const file = fs.createWriteStream("public/logo.png");
https.get("https://i.imgur.com/Cf9hyOm.png", function(response) {
  response.pipe(file);
});
