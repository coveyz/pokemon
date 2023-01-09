const question = `给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。`

const subtractProductAndSum = num => {
  const numberResult = num.toString().split('').reduce((acc,cur) => {
    acc[0] = acc[0] + Number(cur)
    acc[1] = acc[1] * Number(cur)
    return acc
  }, [0,1])
  return numberResult[1] - numberResult[0]
}


/**
 ** 模拟
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum2 = function (n) {
	let add = 0,
		mul = 1;
	while (n > 0) {
		let digit = n % 10;
		n = Math.floor(n / 10);
		add += digit;
		mul *= digit;
	}
	return mul - add;
};

console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))

