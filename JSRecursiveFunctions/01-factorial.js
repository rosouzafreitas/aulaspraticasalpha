function factor(num, result = 1){
    if(num == 1){
        console.log(result)
        return result;
    }
    result = result * num
    num = num - 1
    factor(num, result);
}

factor(10);