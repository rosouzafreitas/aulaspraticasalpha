const resultsTable = document.getElementById('stored')

function writeData () {
    fetch(`http://localhost:8080/test`)
      .then(response => {
        return response.json();
      })
      .then(data => {
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
}

function timeOutSearch () {
  let myTimeout = setTimeout(function fetchData() {

  const search_value = document.getElementById('search_value').value;
  const search_type = document.getElementById('search_type').value;

  if (search_value.length >= 3 || (search_type == "id" & search_value.length > 0)) {
    let fetchTimeout = setTimeout(function () {
      fetch(`http://localhost:8080/test?${search_type}=${search_value}`)
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
        console.log("Deu ruim boy");
        clearTimeout(fetchTimeout);
      })
    }, 2000)
  
  }
  else {
    clearTimeout(myTimeout)
    writeData();
  }
  }, 25)
}
