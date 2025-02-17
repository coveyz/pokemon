/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;

    let maxRow = mat.length, maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        sum += mat[i][i]; //zheng
        sum += mat[i][maxCol - 1 - i]; //ni
    };

    if (maxRow % 2 === 1) {
        const middleItem = mat[Math.floor(maxRow / 2)][Math.floor(maxCol / 2)];
        sum -= middleItem;
    }
    

    return sum;
};


console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]])); // 25