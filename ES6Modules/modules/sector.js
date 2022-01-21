export default function (dataArray, sector, tempArray) {
    for (let i=0;i<dataArray.length;i++) {
        if (sector == dataArray[i].sector) {
        tempArray.push(dataArray[i])
        }
    };
    tempArray.sort((a,b) => {
        return a.name.localeCompare(b.name)
    });
}