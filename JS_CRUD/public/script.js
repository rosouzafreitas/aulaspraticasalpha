const resultsTable = document.getElementById('stored')

function eraseData () {
  while (resultsTable.hasChildNodes()) {
    resultsTable.removeChild(resultsTable.lastChild)
  }
}

function createTableHeader () {
  const tableHeader = document.createElement('tr')
  tableHeader.innerHTML = `<td>Product ID</td><td>Product Name</td><td>Description</td>`
  resultsTable.appendChild(tableHeader)
}

function writeData () {
    fetch(`http://localhost:8080/produto/all`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          const newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].desc}</td>`
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
      fetch(`http://localhost:8080/produto?${search_type}=${search_value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();

        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].desc}</td>`
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

function postUser () {
  const new_id = document.getElementById('new_id').value
  const new_name = document.getElementById('new_name').value
  const new_desc = document.getElementById('new_desc').value

    fetch('http://localhost:8080/produto', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({id: new_id,name: new_name,desc: new_desc})
    } /*{id: new_id,name: new_name,desc: new_desc}*/)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        eraseData();
        createTableHeader();
        for (i=0;i<data.length;i++) {
          let newData = document.createElement('tr')
          newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].desc}</td>`
          resultsTable.appendChild(newData)
        }
      })
      .catch(err => {
        console.log("Error on fetching data");
      })
}

function deleteUser () {
  const del_id = document.getElementById('del_id').value;

  fetch(`http://localhost:8080/produto/${del_id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
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
        newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].desc}</td>`
        resultsTable.appendChild(newData)
      }
    })
  .catch(err => {
    console.log("Error on fetching data");
  })
}

function updateUser () {
  const updt_id = document.getElementById('updt_id').value;
  const updt_name = document.getElementById('updt_name').value
  const updt_desc = document.getElementById('updt_desc').value

  fetch(`http://localhost:8080/produto/${updt_id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({name: updt_name,desc: updt_desc})
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
        newData.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].desc}</td>`
        resultsTable.appendChild(newData)
      }
    })
  .catch(err => {
    console.log("Error on fetching data");
  })
}