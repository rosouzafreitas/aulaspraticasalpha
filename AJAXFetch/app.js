const express = require('express');
const app = express();
app.get('/', function(req,res){
    app.use(express.static('public'))
    return false
});

const dataArray = [{
    "id": 1,
    "name": "Guntar Kingett",
    "email": "gkingett0@networkadvertising.org"
  }, {
    "id": 2,
    "name": "Emerson Braden",
    "email": "ebraden1@nih.gov"
  }, {
    "id": 3,
    "name": "Cullen Padson",
    "email": "cpadson2@yellowpages.com"
  }, {
    "id": 4,
    "name": "Lilian Sim",
    "email": "lsim3@nsw.gov.au"
  }, {
    "id": 5,
    "name": "Frazier Escalera",
    "email": "fescalera4@adobe.com"
  }, {
    "id": 6,
    "name": "Abbi Pittoli",
    "email": "apittoli5@shinystat.com"
  }, {
    "id": 7,
    "name": "Angie Garr",
    "email": "agarr6@tmall.com"
  }, {
    "id": 8,
    "name": "Jewelle Pedley",
    "email": "jpedley7@tmall.com"
  }, {
    "id": 9,
    "name": "Alana Kyte",
    "email": "akyte8@uiuc.edu"
  }, {
    "id": 10,
    "name": "Esdras Smallacombe",
    "email": "esmallacombe9@t.co"
  }, {
    "id": 11,
    "name": "Arlen Nuemann",
    "email": "anuemanna@weibo.com"
  }, {
    "id": 12,
    "name": "Sheilakathryn Chittem",
    "email": "schittemb@earthlink.net"
  }, {
    "id": 13,
    "name": "Godard Labadini",
    "email": "glabadinic@comcast.net"
  }, {
    "id": 14,
    "name": "Sella Dearle",
    "email": "sdearled@amazon.com"
  }, {
    "id": 15,
    "name": "Tobye Kubalek",
    "email": "tkubaleke@springer.com"
  }, {
    "id": 16,
    "name": "Tessi Colwell",
    "email": "tcolwellf@hubpages.com"
  }, {
    "id": 17,
    "name": "Desi Cawdron",
    "email": "dcawdrong@nymag.com"
  }, {
    "id": 18,
    "name": "Kristan Voysey",
    "email": "kvoyseyh@smh.com.au"
  }, {
    "id": 19,
    "name": "Katleen Thorold",
    "email": "kthoroldi@redcross.org"
  }, {
    "id": 20,
    "name": "Jermaine Willsmore",
    "email": "jwillsmorej@spotify.com"
  }]

app.get('/teste', (req, res) => {
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
})

const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});