module.exports = function (dataArray, anniversary, tempArray) {
    for (let i=0;i<dataArray.length;i++) {
        if (anniversary == dataArray[i].anniversary) {
        tempArray.push(dataArray[i])
        }
    };
    tempArray.sort((a,b) => {
        return a.name.localeCompare(b.name)
    });
    return tempArray
}