export default function (dataArray, branch, tempArray) {
    for (let i=0;i<dataArray.length;i++) {
        if (branch == dataArray[i].branch) {
        tempArray.push(dataArray[i])
        }
    };
    tempArray.sort((a,b) => {
        return a.name.localeCompare(b.name)
    });
}