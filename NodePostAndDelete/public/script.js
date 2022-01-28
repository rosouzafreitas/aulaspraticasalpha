const resultsTable = document.getElementById('stored')

function eraseData () {
  while (resultsTable.hasChildNodes()) {
    resultsTable.removeChild(resultsTable.lastChild)
  }
}

function createTableHeader () {
  const tableHeader = document.createElement('tr')
  tableHeader.innerHTML = `<td>Client ID</td><td>Name</td><td>E-mail</td>`
  resultsTable.appendChild(tableHeader)
}

function writeData () {
    fetch(`http://localhost:8080/db`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          const newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`
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

  if (search_value.length >= 3 || (search_type == "id" & search_value.length > 0)) {
    let fetchTimeout = setTimeout(function () {
      fetch(`http://localhost:8080/db?${search_type}=${search_value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();

        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`
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

let formCounter = 0;
function showForm() {
  if (formCounter % 2 == 0) {
    document.getElementById('addform').style.display = "flex";
    document.getElementById('deleteform').style.display = "flex";
    formCounter++;
  } else {
    document.getElementById('addform').style.display = "none";
    document.getElementById('deleteform').style.display = "none";
    formCounter++;
  }
}

function postUser () {
  const new_id = document.getElementById('new_id').value
  const new_name = document.getElementById('new_name').value
  const new_mail = document.getElementById('new_mail').value

    fetch('http://localhost:8080/post', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({id: new_id,name: new_name,mail: new_mail})
    } /*{id: new_id,name: new_name,mail: new_mail}*/)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Error on fetching data");
      })
}


function deleteUser () {
  const del_id = document.getElementById('del_id').value

    fetch('http://localhost:8080/delete', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify({id: del_id})
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Error on fetching data");
      })
}