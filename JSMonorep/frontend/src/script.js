const resultsTable = document.getElementById('stored')

function eraseData () {
  while (resultsTable.hasChildNodes()) {
    resultsTable.removeChild(resultsTable.lastChild)
  }
}

function createTableHeader () {
  const tableHeader = document.createElement('tr')
  tableHeader.innerHTML = `<td>Matricule</td><td>Name</td><td>Branch</td><td>E-mail</td><td>Sector</td><td>Birth Month</td>`
  resultsTable.appendChild(tableHeader)
}

function writeData () {
    fetch(`http://localhost:3000/database`, {})
      .then(response => {
        return response.json();
      })
      .then(data => {
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          const newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].matricule}</td><td>${data[i].name}</td><td>${data[i].branch}</td><td>${data[i].email}</td><td>${data[i].sector}</td><td>${data[i].anniversary}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Error on fetching data")
      })
}

function timeOutSearch () {
  let myTimeout = setTimeout(function fetchData() {

  const search_value = document.getElementById('search_value').value;
  const search_type = document.getElementById('search_type').value;

  if (search_value.length >= 1) {
    let fetchTimeout = setTimeout(function () {
      fetch(`http://localhost:3000/database?${search_type}=${search_value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();

        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].matricule}</td><td>${data[i].name}</td><td>${data[i].branch}</td><td>${data[i].email}</td><td>${data[i].sector}</td><td>${data[i].anniversary}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Error on fetching data");
        clearTimeout(fetchTimeout);
      })
    }, 1975)
  
  }
  else {
    clearTimeout(myTimeout)
    writeData();
  }
  }, 25)
}

let counter = 0;
function showForm() {
  if (counter % 2 == 0) {
    document.getElementById('add_form').style.display = "flex";
    counter++;
  } else {
    document.getElementById('add_form').style.display = "none";
    counter++;
  }
}

function addTo () {
  const newMatricule = document.getElementById('form_matricule').value;
  const newName = document.getElementById('form_name').value;
  const newBranch = document.getElementById('form_branch').value;
  const newMail = document.getElementById('form_mail').value;
  const newSector = document.getElementById('form_sector').value;
  const newAnniversary = document.getElementById('form_anniversary').value;
  fetch(`http://localhost:3000/add?matricule=${newMatricule}&name=${newName}&branch=${newBranch}&mail=${newMail}&sector=${newSector}&anniversary=${newAnniversary}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      eraseData();
      createTableHeader();
      for (i=0;i<data.length;i++) {
        const newData = document.createElement('tr')
        newData.innerHTML = `<td>${data[i].matricule}</td><td>${data[i].name}</td><td>${data[i].branch}</td><td>${data[i].email}</td><td>${data[i].sector}</td><td>${data[i].anniversary}</td>`
        resultsTable.appendChild(newData)
      }
    })
    .catch(err => {
      console.log("Error on fetching data")
    })
}