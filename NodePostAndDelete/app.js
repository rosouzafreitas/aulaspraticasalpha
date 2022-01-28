const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json())

app.get('/', function(req,res){
    app.use(express.static('public'))
    res.redirect('/index.html')
    return false
});

const database = fs.readFileSync('database.json','utf8');
const dataArray = JSON.parse(database);

app.get('/db', (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  const mail = req.query.mail;
  let tempArray = []
  for (i=0;i<dataArray.length;i++) {
		if (id == dataArray[i].id) {
      tempArray.push(dataArray[i])
      console.log(tempArray)
		}
    if (dataArray[i].name.includes(name)) {
      tempArray.push(dataArray[i])
    }
    if (dataArray[i].email.includes(mail)) {
      tempArray.push(dataArray[i])
    }
  };
  if (tempArray.length > 0) {
    res.json(tempArray)
  }
  res.json(dataArray)
});

app.post('/post', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const mail = req.body.mail;
  let newData = {
    "id": id,
    "name": name,
    "email": mail
  }
  dataArray.push(newData);
  fs.writeFile("database.json", JSON.stringify(dataArray), err => {
    throw err
  })
  res.json(dataArray)
})


app.delete('/delete', (req, res) => {
  const id = req.body.id;
  for (i=0;i<dataArray.length;i++) {
		if (id == dataArray[i].id) {
      dataArray.splice(i, 1)
		}
  }
  fs.writeFile("database.json", JSON.stringify(dataArray), err => {
    throw err
  })
  res.json(dataArray)
})

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});