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
  }];
const resultsTable = document.getElementById('stored')


function writeData () {
    let tableHeader = document.createElement('tr')
    tableHeader.innerHTML = `<td>Client ID</td><td>Name</td><td>E-mail</td>`
    resultsTable.appendChild(tableHeader)

    for (i=0;i<dataArray.length;i++) {
    let newData = document.createElement('tr')
    newData.innerHTML = `<td>${dataArray[i].id}</td><td>${dataArray[i].name}</td><td>${dataArray[i].email}</td>`
    resultsTable.appendChild(newData)
    }
}

function fetchData () {
  let client_id = parseInt(document.getElementById('clientid').value, 10);
  let client_name = document.getElementById('clientname').value;
  let client_mail = document.getElementById('clientmail').value;

  if (client_id == "") {client_id = "none"}
  if (client_name == "" || client_name.length < 2) {client_name = "none"}
  if (client_mail == "" || client_mail.length < 2) {client_mail = "none"}

  console.log(client_id, client_name, client_mail)

  fetch(`http://localhost:8080/teste?id=${client_id}&name=${client_name}&mail=${client_mail}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        while (resultsTable.hasChildNodes()) {
          resultsTable.removeChild(resultsTable.lastChild)
        }

        let tableHeader = document.createElement('tr')
        tableHeader.innerHTML = `<td>Client ID</td><td>Name</td><td>E-mail</td>`
        resultsTable.appendChild(tableHeader)

        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Deu ruim boy")
      })
  
  if (client_id == "none" & client_name == "none" & client_mail == "none") {
    writeData();
  }
}
