function calculator (operand1, operand2) {
    return {
        operand1: operand1,
        operand2: operand2,
        sum: function () {return result = operand1+operand2},
        subtract: function () {return result = operand1-operand2},
        multiply: function () {return result = operand1*operand2},
        divide: function () {return result = operand1/operand2}
    }
}

function sumFunc () {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const sum = calculator(number1, number2).sum();
    document.getElementById("sentence").innerHTML = number1 + " + " + number2 + " = ";
    document.getElementById("result").innerHTML = sum
}

function subtractFunc () {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const subtract = calculator(number1, number2).subtract();
    document.getElementById("sentence").innerHTML = number1 + " - " + number2 + " = ";
    document.getElementById("result").innerHTML = subtract
}

function multiplyFunc () {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const multiply = calculator(number1, number2).multiply();
    document.getElementById("sentence").innerHTML = number1 + " x " + number2 + " = ";
    document.getElementById("result").innerHTML = multiply
}

function divideFunc () {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    let divide = calculator(number1, number2).divide();
    if (number2 == 0) {
        divide = 0;
    }
    document.getElementById("sentence").innerHTML = number1 + " / " + number2 + " = ";
    document.getElementById("result").innerHTML = divide
}

function submitFunc () {
    document.getElementById("aero2").style.right = "5%"
    document.getElementById("sent").style.right = "5%"
}