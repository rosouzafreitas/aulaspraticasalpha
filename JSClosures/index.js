/*
function createMultiplier (multiplier) {
    return number => {
        return multiplier*number
    }
}
let multiplyBy9 = createMultiplier(9)
console.log(multiplyBy9(9))
console.log(multiplyBy9(17))
console.log(multiplyBy9(21.5))

closure functions test
*/

var fontSize = 16
function changeSize (multiplier) {
    return times => {
        fontSize = fontSize + (multiplier*times)
        document.getElementById('fairyTale').style.fontSize = fontSize+"px"
    }
}