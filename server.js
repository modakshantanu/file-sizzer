// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');
const bodyParser = require('body-parser');

var upload = multer()                    

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload",upload.single('upfile'),function(req,res){
    
  
  res.end(JSON.stringify({size:req.file.size}));
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
