function sum() {
    let number1string = document.getElementById("number1").value;
    let number2string = document.getElementById("number2").value;
    let number1 = parseInt(number1string, 10)
    if (number1 == NaN) {
        number1 = 0;
    }
    let number2 = parseInt(number2string, 10)    
    let result = number1 + number2
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " + " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}
function subtraction() {
    let number1string = document.getElementById("number1").value;
    let number2string = document.getElementById("number2").value;
    let number1 = parseInt(number1string, 10)
    let number2 = parseInt(number2string, 10)    
    let result = number1 - number2
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " - " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}
function division() {
    let number1string = document.getElementById("number1").value;
    let number2string = document.getElementById("number2").value;
    let number1 = parseInt(number1string, 10)
    let number2 = parseInt(number2string, 10)    
    let result = number1 / number2
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " / " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}
function multiply() {
    let number1string = document.getElementById("number1").value;
    let number2string = document.getElementById("number2").value;
    let number1 = parseInt(number1string, 10)
    let number2 = parseInt(number2string, 10)    
    let result = number1 * number2
    console.log(result);
    document.getElementById("sentence").innerHTML = number1 + " x " + number2 + " = ";
    document.getElementById("result").innerHTML = result
}
function submit() {
    document.getElementById("aero2").style.right = "5%"
    document.getElementById("sent").style.right = "5%"
}