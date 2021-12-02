
function storeValues () {
    let field1 = document.getElementById("field1").value;
    let field2 = document.getElementById("field2").value;
    let field3 = document.getElementById("field3").value;
    let field4 = document.getElementById("field4").value;
    let number1 = parseFloat(field1, 10)
    let number2 = parseFloat(field2, 10)
    let number3 = parseFloat(field3, 10)
    let number4 = parseFloat(field4, 10)
    let numbers = [field1, field2, field3, field4];
    let numbersdiv = document.getElementById("numbersdiv");

    while (numbersdiv.hasChildNodes()) {
        numbersdiv.removeChild(numbersdiv.firstChild);
    }

    for (i=0; i<numbers.length; i++) {
        let p = document.createElement('span');
        p.innerHTML = numbers[i];
        numbersdiv.appendChild(p)
    }

    this.invertValues = function () {
        while (numbersdiv.hasChildNodes()) {
            numbersdiv.removeChild(numbersdiv.firstChild);
        }
        numbers = numbers.reverse();
        for (i=0; i<numbers.length; i++) {
            let p = document.createElement('span');
            p.innerHTML = numbers[i];
            numbersdiv.appendChild(p)
        }
    }

    this.orderUp = function () {
        let numbers = [number1, number2, number3, number4];
        while (numbersdiv.hasChildNodes()) {
            numbersdiv.removeChild(numbersdiv.firstChild);
        }
        for (var i = 0; i < numbers.length ; i++) {
            for(var j = 0 ; j < numbers.length - i - 1; j++){
                if (numbers[j] > numbers[j + 1]) {
                    var temp = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j + 1] = temp;
                }
            }
        }
        for (i=0; i<numbers.length; i++) {
            let p = document.createElement('span');
            p.innerHTML = numbers[i];
            numbersdiv.appendChild(p)
        }
    }

    this.orderDown = function () {
        let numbers = [number1, number2, number3, number4];
        while (numbersdiv.hasChildNodes()) {
            numbersdiv.removeChild(numbersdiv.firstChild);
        }
        for (var i = 0; i < numbers.length ; i++) {
            for(var j = 0 ; j < numbers.length - i - 1; j++){
                if (numbers[j] < numbers[j + 1]) {
                    var temp = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j + 1] = temp;
                }
            }
        }
        for (i=0; i<numbers.length; i++) {
            let p = document.createElement('span');
            p.innerHTML = numbers[i];
            numbersdiv.appendChild(p)
        }
    }
}