const carType = {
    popular: {
        minSpeed: {
            min: 110,
            max: 130
        },
        maxSpeed: {
            min: 180,
            max: 200
        },
        drift: {
            min: 0.03,
            max: 0.04
        }
    },
    sport: {
        minSpeed: {
            min: 125,
            max: 145
        },
        maxSpeed: {
            min: 195,
            max: 215
        },
        drift: {
            min: 0.02,
            max: 0.03
        }
    },
    superSport: {
        minSpeed: {
            min: 140,
            max: 160
        },
        maxSpeed: {
            min: 210,
            max: 230
        },
        drift: {
            min: 0.01,
            max: 0.0175
        }
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function runner() {
    let carOdd = random(0,1);
    if (carOdd <= 0.6) {
        minSpeed = random(carType.popular.minSpeed.min, carType.popular.minSpeed.max)
        maxSpeed = random(carType.popular.maxSpeed.min, carType.popular.maxSpeed.max)
        drift = random(carType.popular.drift.min, carType.popular.drift.max)
    } else if (carOdd <= 0.95) {
        minSpeed = random(carType.sport.minSpeed.min, carType.sport.minSpeed.max)
        maxSpeed = random(carType.sport.maxSpeed.min, carType.sport.maxSpeed.max)
        drift = random(carType.sport.drift.min, carType.sport.drift.max)
    } else {
        minSpeed = random(carType.superSport.minSpeed.min, carType.superSport.minSpeed.max)
        maxSpeed = random(carType.superSport.maxSpeed.min, carType.superSport.maxSpeed.max)
        drift = random(carType.superSport.drift.min, carType.superSport.drift.max)
    }
    speed = random(minSpeed, maxSpeed)
    return speed - (speed*drift)
}

function makeRace (laps) {
    let runner1 = 0;
    let runner2 = 0;
    let runner3 = 0;
    let winner = "";
    for(i=0;i<laps;i++) {
        pedroSpeed = runner();
        jucaSpeed = runner();
        ednaSpeed = runner();
        if (pedroSpeed>jucaSpeed && pedroSpeed>ednaSpeed) {
            runner1++;
        } else {
            if (jucaSpeed>pedroSpeed && jucaSpeed>ednaSpeed) {
                runner2++;
            } else {
                runner3++;
            }
        }
        console.log(pedroSpeed, jucaSpeed, ednaSpeed)
    }
    console.log(runner1, runner2, runner3)
    if (runner1>runner2 && runner1>runner3) {
        document.getElementById("first").innerHTML = `Pedro venceu! Ganhou ${runner1} voltas`
        winner = "pedro"
    } else {
        if (runner2>runner1 && runner2>runner3) {
            document.getElementById("first").innerHTML = `Juca venceu! Ganhou ${runner2} voltas`
            winner = "juca"
        } else {
            document.getElementById("first").innerHTML = `Edna venceu! Ganhou ${runner3} voltas`
            winner = "edna"
        }
    }
    if (winner=="pedro" && runner2>runner3) {
        document.getElementById("second").innerHTML = `Juca foi o segundo. Ganhou ${runner2} voltas`
        document.getElementById("third").innerHTML = `Edna foi a terceira. Ganhou ${runner3} voltas`
    } else {
        if (winner=="pedro" && runner3>runner2) {
        document.getElementById("second").innerHTML = `Edna foi a segunda. Ganhou ${runner3} voltas`
        document.getElementById("third").innerHTML = `Juca foi o terceiro. Ganhou ${runner2} voltas`
        }
    }
    if (winner=="juca" && runner1>runner3) {
        document.getElementById("second").innerHTML = `Pedro foi o segundo. Ganhou ${runner1} voltas`
        document.getElementById("third").innerHTML = `Edna foi a terceira. Ganhou ${runner3} voltas`
    } else {
        if (winner=="juca" && runner3>runner1) {
        document.getElementById("second").innerHTML = `Edna foi a segunda. Ganhou ${runner3} voltas`
        document.getElementById("third").innerHTML = `Pedro foi o terceiro. Ganhou ${runner1} voltas`
        }
    }
    if (winner=="edna" && runner1>runner2) {
        document.getElementById("second").innerHTML = `Pedro foi o segundo. Ganhou ${runner1} voltas`
        document.getElementById("third").innerHTML = `Juca foi o terceiro. Ganhou ${runner2} voltas`
    } else {
        if (winner=="edna" && runner2>runner1) {
        document.getElementById("second").innerHTML = `Juca foi o segundo. Ganhou ${runner2} voltas`
        document.getElementById("third").innerHTML = `Pedro foi o terceiro. Ganhou ${runner1} voltas`
        }
    }
    if (runner1>laps/2 && runner1==runner2) {
        document.getElementById("first").innerHTML = `Pedro e Juca empataram! Ganharam ${runner1} voltas cada`
        document.getElementById("second").innerHTML = `Edna foi a terceira. Ganhou ${runner3} voltas`
        document.getElementById("third").innerHTML = ""
    } else if (runner2>laps/2 && runner2==runner3) {
        document.getElementById("first").innerHTML = `Juca e Edna empataram! Ganharam ${runner2} voltas cada`
        document.getElementById("second").innerHTML = `Pedro foi o terceiro. Ganhou ${runner1} voltas`
        document.getElementById("third").innerHTML = ""
    } else if (runner1>laps/2 && runner1==runner3) {
        document.getElementById("first").innerHTML = `Pedro e Edna empataram! Ganharam ${runner1} voltas cada`
        document.getElementById("second").innerHTML = `Juca foi o terceiro. Ganhou ${runner2} voltas`
        document.getElementById("third").innerHTML = ""
    }
}
