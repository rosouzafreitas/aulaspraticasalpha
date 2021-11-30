function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

async function writePhrase () {
    document.getElementById("writebtn").disabled = true;
    let blackboard = document.getElementById("blackboard");
    while (blackboard.hasChildNodes()) {
        blackboard.removeChild(blackboard.firstChild)
    }
    let phrase = document.getElementById("phrase").value;
    let reps = document.getElementById("reps").value;
    let index = 0;
    let erases = document.getElementById("erases");
    let erasestxt = erases.textContent;
    let start = parseInt(erasestxt, 10);
    let end = (start + 1).toString();
    let lastlncount = document.getElementById("lastlncount");
    erases.innerHTML = end;
    erases.style.display = "inline-block"
    document.getElementById("counterlabel1").style.display = "inline-block"
    document.getElementById("counterlabel2").style.display = "inline-block"
    lastlncount.innerHTML = reps.toString();
    while (index<reps) {
        let p = document.createElement('p');
        blackboard.appendChild(p);
        let data = phrase;
        let output = '';
        p.innerHTML = output;
        for(let i = 0; i < data.length; i++) {
          output = output.concat(data[i]);
          p.innerHTML = output;
          await sleep(25)
        }
        index++;
        await sleep(500)
    }
    document.getElementById("writebtn").disabled = false;
}