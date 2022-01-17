function randomize(num) {
    let randomArray = [];
    for (i=0;i<num;i++) {
        let newNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        for (j=0;j<randomArray.length;j++) {
            if (randomArray[j] == newNum) {
                while (randomArray[j] == newNum) {
                    newNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                }
            }
        } // loop feito para rejeitar números repetidos
        randomArray.push(newNum)
    }
    console.log(randomArray)
    return Math.max(...randomArray)
}
    
console.log(`O maior valor do array é: ${randomize(10)}`);