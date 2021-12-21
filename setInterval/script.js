let sortedNumbers = [];
let interval;

function callbackFunction (arg) {
    let numspan = document.createElement("span");
    numspan.innerHTML = arg;
    numbersdiv.appendChild(numspan)
}

function mainInterval () {
    if (sortedNumbers.length>=1) {
        sortedNumbers = []
    }
    interval = setInterval(sortNumbers, 1000)
}

function sortNumbers () {
    let numbersdiv = document.getElementById("numbersdiv")
    min = Math.ceil(1);
    max = Math.floor(60);
    let newNumber = Math.floor(Math.random() * (max - min)) + min;
    sortedNumbers.push(newNumber);
    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
    while (hasDuplicates(sortedNumbers)) {
        sortedNumbers.pop()
        let newNumber = Math.floor(Math.random() * (max - min)) + min;
        sortedNumbers.push(newNumber);
    }
    while (numbersdiv.hasChildNodes()) {
        numbersdiv.removeChild(numbersdiv.firstChild)
    }
    for (i=0;i<sortedNumbers.length;i++) {
        callbackFunction(sortedNumbers[i])
    }
    if (sortedNumbers.length >= 6) {
        clearInterval(interval);
        let result = document.getElementById("result");
        result.style.display = "flex"
        result.innerHTML = "O resultado do último sorteio foi: "
        for (i=0;i<sortedNumbers.length;i++) {
            result.textContent += sortedNumbers[i];
            result.textContent += " "
        }
    }
}