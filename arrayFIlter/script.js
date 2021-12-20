let dataArray = [];
let present_date = new Date();
let present = present_date.getTime()
let resultsTable = document.getElementById('stored')
const one_day = 1000*60*60*24


function storeData () {
    let clientname = document.getElementById('clientname').value;
    let selldate = new Date(document.getElementById('selldate').value)
    let selldateNum = document.getElementById('selldate').value;
    let sellprice = parseFloat(document.getElementById('price').value, 10)
    let sell = {
        client: clientname,
        dateNum: selldateNum,
        date: selldate.getTime(),
        expired: "",
        price: sellprice,
        fees: 0
    }
    if (present - sell.date > 0) {
        sell.expired = "YES"
    } else {
        sell.expired = "NO"
    }

    dataArray.push(sell)
    let newData = document.createElement('tr')
    newData.innerHTML = `<td>${sell.client}</td><td>${sell.dateNum}</td><td>${sell.expired}</td><td>${sell.price} USD</td><td>${sell.fees} USD</td>`
    resultsTable.appendChild(newData)
}

function calculateFee () {
    let withfees = dataArray.map(function (elem) {
        //console.log(present)
        //console.log(elem.date)
        if (present - elem.date > 0) {
            const base_fee = 0.02;
            let diary_fees = ((parseFloat((present - elem.date)/one_day, 10).toFixed(2)) * 0.001);
            let total_fee = base_fee + diary_fees
            elem.fees = total_fee * elem.price
            elem.expired = "YES"
            return elem;
        } else {
            return elem;
        }
    })

    while (resultsTable.hasChildNodes()) {
        resultsTable.removeChild(resultsTable.lastChild)
    }
    let tableHeader = document.createElement('tr')
    tableHeader.innerHTML = `<td>Client</td><td>Expiration Date</td><td>Expired</td><td>Value</td><td>Fees TBC</td>`
    resultsTable.appendChild(tableHeader)

    for (i=0; i<withfees.length; i++) {
        let newData = document.createElement('tr')
        newData.innerHTML = `<td>${withfees[i].client}</td><td>${withfees[i].dateNum}</td><td>${withfees[i].expired}</td><td>${withfees[i].price} USD</td><td>${withfees[i].fees} USD</td>`
        resultsTable.appendChild(newData)
    }
}

function resetTable () {
    /*for (i=0; i<dataArray.length; i++) {
        resultsTable.removeChild(resultsTable.lastChild)
    }*/
    while (resultsTable.hasChildNodes()) {
        resultsTable.removeChild(resultsTable.lastChild)
    }
    let tableHeader = document.createElement('tr')
    tableHeader.innerHTML = `<td>Client</td><td>Expiration Date</td><td>Expired</td><td>Value</td><td>Fees TBC</td>`
    resultsTable.appendChild(tableHeader)
}

let filtersSwitch = 0;

function showFilters () {
    if (filtersSwitch%2==0) {
        document.getElementById('filtersform').style.display = "flex";
        filtersSwitch++;
    } else {
        document.getElementById('filtersform').style.display = "none";
        filtersSwitch++
    }
}

function filterData() {
    let startdate = (new Date(document.getElementById('startdate').value)).getTime();
    let enddate = (new Date(document.getElementById('enddate').value)).getTime();
    let minimum = parseFloat(document.getElementById('minimum').value, 10);
    let maximum = parseFloat(document.getElementById('maximum').value, 10);
    let filtered = [];
    console.log(startdate, enddate)

    function myFilter(item) {
        let startCondition = true;
        let endCondition = true;
        let minimumCondition = true;
        let maximumCondition = true;
        console.log(item.date)
        if (startdate - item.date > 0 & startdate > 0) {
            startCondition = false;
        }
        if (enddate - item.date < 0 & enddate > 0) {
            endCondition = false;
        }
        if (item.price < minimum) {
            minimumCondition = false;
        }
        if (item.price > maximum) {
            maximumCondition = false;
        }
        console.log(startCondition)
        if (startCondition & endCondition & minimumCondition & maximumCondition) {
            console.log(item.date)
            filtered.push(item)
        } else {
            console.log("outta boundaries of filter")
        }
    }

    // Uso do método FILTER
    dataArray.filter(myFilter);

    while (resultsTable.hasChildNodes()) {
        resultsTable.removeChild(resultsTable.lastChild)
    }
    let tableHeader = document.createElement('tr')
    tableHeader.innerHTML = `<td>Client</td><td>Expiration Date</td><td>Expired</td><td>Value</td><td>Fees TBC</td>`
    resultsTable.appendChild(tableHeader)

    console.log(filtered)
    for (i=0; i<filtered.length; i++) {
        let newData = document.createElement('tr')
        newData.innerHTML = `<td>${filtered[i].client}</td><td>${filtered[i].dateNum}</td><td>${filtered[i].expired}</td><td>${filtered[i].price} USD</td><td>${filtered[i].fees} USD</td>`
        resultsTable.appendChild(newData)
    }
}