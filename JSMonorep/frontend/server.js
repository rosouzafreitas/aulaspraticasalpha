const express = require('express');
const app = express();

app.get('/', function(req,res){
    app.use(express.static('src'))
    res.redirect('/index.html')
    return false
});

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});