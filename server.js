const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongojs = require('mongojs'); //old

//mongodb://andrew:111111@ds227939.mlab.com:27939/rcps


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const distDir = __dirname + "/build/";
app.use(express.static(distDir));
app.use(require('./backend/routes'));

app.listen(port,function(){
	console.log(`app is working on http://localhost:${port}/`);
});

//if not in router. render index.
app.get('*', function(req, res) {
	res.sendFile(distDir+'index.html');
});