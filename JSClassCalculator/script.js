class Calculator {
    constructor(operand1, operand2, operation) {
      this.operand1 = operand1;
      this.operand2 = operand2;
      this.operation = operation;
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }
    
    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }
    
    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult() {
        if (this.operation == "sum") {
            return this.operand1 + this.operand2
        } 
        if (this.operation == "subtract") {
            return this.operand1 - this.operand2
        } 
        if (this.operation == "multiply") {
            return this.operand1 * this.operand2
        } 
        if (this.operation == "division") {
            return this.operand1 / this.operand2
        } 
    }

    clearCalculator() {
        this.operand1 = "";
        this.operand2 = "";
        this.operation = "";
    }
}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);

function sum() {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const sum = new Calculator();
    sum.setOperand1(number1)
    sum.setOperand2(number2)
    sum.setOperation("sum")
    const result = sum.getResult()
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " + " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}

function subtraction() {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const subtract = new Calculator();
    subtract.setOperand1(number1)
    subtract.setOperand2(number2)
    subtract.setOperation("subtract")
    const result = subtract.getResult()
    document.getElementById("sentence").innerHTML = number1 + " - " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}

function multiply() {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const multiply = new Calculator();
    multiply.setOperand1(number1)
    multiply.setOperand2(number2)
    multiply.setOperation("multiply")
    const result = multiply.getResult()
    document.getElementById("sentence").innerHTML = number1 + " x " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}

function division() {
    const number1 = parseInt(document.getElementById("number1").value, 10)
    const number2 = parseInt(document.getElementById("number2").value, 10)
    const division = new Calculator();
    division.setOperand1(number1)
    division.setOperand2(number2)
    division.setOperation("division")
    let result = division.getResult()
    if (number2 == 0) {
        result = 0;
    }
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " / " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}
function submit() {
    document.getElementById("aero2").style.right = "5%"
    document.getElementById("sent").style.right = "5%"
}