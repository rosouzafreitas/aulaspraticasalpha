const my_matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];

function logMatrix(matrix, row=0, column=0) {
console.log(matrix[row][column])
column++;
if (column == matrix[row].length) {
row++;
column=0;
}
if (row==matrix.length) {
return;
}
logMatrix(matrix, row, column)
}

logMatrix(my_matrix);