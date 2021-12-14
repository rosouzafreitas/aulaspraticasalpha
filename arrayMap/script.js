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
    for (i=0; i<withfees.length; i++) {
        resultsTable.removeChild(resultsTable.lastChild)
    }
    for (i=0; i<withfees.length; i++) {
        let newData = document.createElement('tr')
        newData.innerHTML = `<td>${withfees[i].client}</td><td>${withfees[i].dateNum}</td><td>${withfees[i].expired}</td><td>${withfees[i].price} USD</td><td>${withfees[i].fees} USD</td>`
        resultsTable.appendChild(newData)
    }
}
function resetTable () {
    for (i=0; i<dataArray.length; i++) {
        resultsTable.removeChild(resultsTable.lastChild)
    }
}