var arrangeCoins = function (n) {
  let row = 0
  for (let index = 0; index <= n; index++) {
    const num = index * (index + 1) /2
    if (num >= n) {
      row = num === n ? index : index -1
      return row
    }
  }
};
console.log(arrangeCoins(1));

