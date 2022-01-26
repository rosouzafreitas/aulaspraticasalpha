const express = require('express')
const app = express();
const fs = require('fs');

const cors = require('cors');
const configCors = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(configCors));

const database = fs.readFileSync('database.json','utf8');
const dataArray = JSON.parse(database);

const anniversarySearch = require('./components/anniversary');
const sectorSearch = require('./components/sector')
const branchSearch = require('./components/branch');

app.get('/database', (req, res) => {
  const anniversary = req.query.anniversary;
  const sector = req.query.sector;
  const branch = req.query.branch;
  let tempArray = [];
  anniversarySearch(dataArray, anniversary, tempArray);
  sectorSearch(dataArray, sector, tempArray);
  branchSearch(dataArray, branch, tempArray);
  if (tempArray.length > 0) {
    console.log(tempArray)
    res.json(tempArray)
  }
  res.json(dataArray)
});

app.get('/add', (req, res) => {
  const matricule = req.query.matricule;
  const name = req.query.name;
  const branch = req.query.branch;
  const mail = req.query.mail;
  const sector = req.query.sector;
  const anniversary = req.query.anniversary;
  
  let newData = {
    "matricule": matricule,
    "name": name,
    "branch": branch,
    "email": mail,
    "sector": sector,
    "anniversary": anniversary
  }
  dataArray.push(newData);
  fs.writeFile("database.json", JSON.stringify(dataArray), err => {
    throw err
  })
  res.json(dataArray)
});

const hostname = "localhost";
const port = 3000;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});