const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(express.json());
var corsOptions = {
  origin: 'https://localhost:8080/',
  optionsSuccessStatus: 200
};
app.use(cors());

app.get('/', function(req,res){
    app.use(express.static('public'))
    res.redirect('/index.html')
    return false
});

const database = fs.readFileSync('database.json','utf8');
let produto = JSON.parse(database);

app.route("/produto")
  .get(function (req, res) {
    const id = req.query.id;
    const name = req.query.name;
    const desc = req.query.desc;
    let tempArray = []
    for (i=0;i<produto.length;i++) {
      if (id == produto[i].id) {
        tempArray.push(produto[i])
        console.log(tempArray)
      }
      if (produto[i].name.includes(name)) {
        tempArray.push(produto[i])
      }
      if (produto[i].desc.includes(desc)) {
        tempArray.push(produto[i])
      }
    };
    if (tempArray.length > 0) {
      tempArray.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
      res.json(tempArray)
    } else {
        produto.sort(function(a, b) { 
          return a.id - b.id  ||  a.name.localeCompare(b.name);
        });
        res.json(produto);
      }
  })

  .post(function (req,res) {
    const id = parseInt(req.body.id, 10);
    const name = req.body.name;
    const desc = req.body.desc;
    const newData = {
      "id": id,
      "name": name,
      "desc": desc
    }
    produto.push(newData);
    produto.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    fs.writeFile("database.json", JSON.stringify(produto), err => {
      if (err) {
        console.log("Error", err);
      }
    })
    res.json(produto)
  })

app.get("/produto/all", (req, res) => {
  produto.sort(function(a, b) { 
    return a.id - b.id  ||  a.name.localeCompare(b.name);
  });
  res.json(produto)
})

app.get("/produto/:productID", (req, res) => {
  const id = req.params.productID;
  let tempArray = []
    for (i=0;i<produto.length;i++) {
      if (id == produto[i].id) {
        tempArray.push(produto[i])
        console.log(tempArray)
      }
    }
    tempArray.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
    res.json(tempArray)
})

app.delete("/produto/:productID", (req, res) => {
    const id = req.params.productID;
    let isFound = false;
    for (i=0;i<produto.length;i++) {
      if (id == produto[i].id) {
        produto.splice(i, 1)
        isFound = true;
      }
    }
    produto.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    fs.writeFile("database.json", JSON.stringify(produto), err => {
      if (err) {
        console.log("Error", err);
      }
    })
    console.log(isFound)
    res.json(produto)
    return isFound
  })

app.post("/produto/:productID", (req, res) => {
    const id = req.params.productID;
    const name = req.body.name;
    const desc = req.body.desc;
    let isFound = false;
    for (i=0;i<produto.length;i++) {
      if (id == produto[i].id) {
        if (name) produto[i].name = name;
        if (desc) produto[i].desc = desc;
        isFound = true;
      }
    }
    produto.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    fs.writeFile("database.json", JSON.stringify(produto), err => {
      if (err) {
        console.log("Error", err);
      }
    })
    console.log(isFound)
    res.json(produto)
    return isFound
  })

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});