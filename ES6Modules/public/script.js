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
    fetch(`http://localhost:8080/test`)
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
      fetch(`http://localhost:8080/test?${search_type}=${search_value}`)
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