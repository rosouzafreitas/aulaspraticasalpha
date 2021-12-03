let roundCount = 0;
document.querySelector(".status").innerHTML = "Turno do O"
let values = [["", "", ""], ["", "", ""], ["", "", ""]]
let valuesvertical = [["", "", ""], ["", "", ""], ["", "", ""]]
let diagonal1 = []
let diagonal2 = []

Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) {
            return false;   
        }           
    }       
    return true;
}

Object.defineProperty(Array.prototype, "equals", {enumerable: false});

function gameFunction (row, column, event) {
    trgt = event.target;
    console.log(row, column)
    const winconrowX = ["X", "X", "X"]
    const winconrowO = ["O", "O", "O"]
    const cells = document.querySelectorAll('.cell')
    if (roundCount % 2 == 0) {
        document.querySelector('.status').innerHTML = "Turno do X"
        trgt.innerHTML = "O"
        values[row][column] = "O"
        valuesvertical[column][row] = "O"
        trgt.disabled = "true"

        if ((row==0 & column==0) || (row==1 & column==1) || (row==2 & column==2)) {
            diagonal1.push("O")
        }

        if ((row==0 & column==2) || (row==1 & column==1) || (row==2 & column==0)) {
            diagonal2.push("O")
        }
        
    } else {
        document.querySelector('.status').innerHTML = "Turno do O"
        trgt.innerHTML = "X"
        values[row][column] = "X"
        valuesvertical[column][row] = "X"
        trgt.disabled = "true"

        if ((row==0 & column==0) || (row==1 & column==1) || (row==2 & column==2)) {
            diagonal1.push("X")
        }

        if ((row==0 & column==2) || (row==1 & column==1) || (row==2 & column==0)) {
            diagonal2.push("X")
        }
    }
    for (i=0; i<values.length; i++) {
        if (values[i].equals(winconrowX)) {
            document.querySelector('.status').innerHTML = "Vitória do X!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
        if (values[i].equals(winconrowO)) {
            document.querySelector('.status').innerHTML = "Vitória do O!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
    }
    for (i=0; i<valuesvertical.length; i++) {
        if (valuesvertical[i].equals(winconrowX)) {
            document.querySelector('.status').innerHTML = "Vitória do X!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
        if (valuesvertical[i].equals(winconrowO)) {
            document.querySelector('.status').innerHTML = "Vitória do O!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
    }
    if (diagonal1.equals(winconrowO)) {
        document.querySelector('.status').innerHTML = "Vitória do O!"
        
        for (j=0; j<cells.length;j++) {
            cells[j].disabled = "true"
        }
    } else {
        if (diagonal1.equals(winconrowX)) {
            document.querySelector('.status').innerHTML = "Vitória do X!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
    }
    if (diagonal2.equals(winconrowO)) {
        document.querySelector('.status').innerHTML = "Vitória do O!"
        
        for (j=0; j<cells.length;j++) {
            cells[j].disabled = "true"
        }
    } else {
        if (diagonal2.equals(winconrowX)) {
            document.querySelector('.status').innerHTML = "Vitória do X!"
            
            for (j=0; j<cells.length;j++) {
                cells[j].disabled = "true"
            }
        }
    }
    roundCount++;
    if (roundCount == 9) {
        document.querySelector('.status').innerHTML = "Empate!"
        for (j=0; j<cells.length;j++) {
            cells[j].disabled = "true"
        }
    }
}
function restartGame () {
    location.reload();
}