/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const start = s.slice(0,n),end = s.slice(n);

  return end + start
};


// const  s = "abcdefg", k = 2;
const s = "lrloseumgh", k = 6

console.log(reverseLeftWords(s,k))