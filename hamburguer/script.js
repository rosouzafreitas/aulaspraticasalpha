function submit() {
    let bread = document.getElementById("bread").value
    console.log(bread)
    let meat = document.getElementById("meat").value
    console.log(meat)
    let salad = document.getElementById("salad").value
    console.log(salad)
    let cheese = document.getElementById("cheese").value
    console.log(cheese)
    let value = 0
    if (bread == "bread1") {
        document.getElementById("breadchoice").innerHTML = "Pão francês"
        value += 3
    } else {
        if (bread == "bread2") {
            document.getElementById("breadchoice").innerHTML = "Pão australiano"
            value += 8
        } else {
            document.getElementById("breadchoice").innerHTML = "Pão de brioche"
            value += 6
        }
    }
    if (meat == "meat1") {
        document.getElementById("meatchoice").innerHTML = "Hamburguer de picanha"
        value += 13
    } else {
        if (meat == "meat2") {
            document.getElementById("meatchoice").innerHTML = "Hamburguer de costela"
            value += 10
        } else {
            document.getElementById("meatchoice").innerHTML = "Hamburguer vegano"
            value += 12
        }
    }
    if (salad == "salad1") {
        document.getElementById("saladchoice").innerHTML = "Alface"
        value += 1.50
    } else {
        if (salad == "salad2") {
            document.getElementById("saladchoice").innerHTML = "Tomate"
            value += 1.50
        } else {
            document.getElementById("saladchoice").innerHTML = "Sem salada"
        }
    }
    if (cheese == "cheese1") {
        document.getElementById("cheesechoice").innerHTML = "Queijo mussarela"
        value += 3
    } else {
        if (cheese == "cheese2") {
            document.getElementById("cheesechoice").innerHTML = "Queijo prato"
            value += 3
        } else {
            document.getElementById("cheesechoice").innerHTML = "Queijo cheedar"
            value += 5;
        }
    }

    document.getElementById("price").innerHTML = value + " reais"
    document.getElementById("aero2").style.right = "5%"
    document.getElementById("sent").style.right = "5%"
    value = 0
}