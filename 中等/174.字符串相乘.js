const question = `
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
`;

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	if (num1 === '0' || num2 === '0') return '0';

	const max = num1.length >= num2.length ? num1 : num2,
		min = num1.length < num2.length ? num1 : num2;

	const mul = (number) => {
		let flage = 0,
			result = '';

		for (let index = max.length - 1; index >= 0; index--) {
			let element = max[index] * 1,
				tmp = element * (number * 1) + flage;
			flage = 0;
			if (tmp >= 10) {
				flage = Math.floor(tmp / 10); // 进位
				result = (tmp % 10) + result; // 整数
			} else {
				result = tmp + result;
			}
		}

		if (flage) {
			result = flage + result;
		}

		return result;
	};

	let pos = 0;
	const arr = [];
	for (let index = min.length - 1; index >= 0; index--) {
		let element = mul(min[index]);
		element = element.padEnd(element.length + pos, '0'); //* 末尾追加0
		// element = element.padStart(min.length * 2 - 1, '0'); //* 开头追加0
		arr.push(element);
		pos++;
	}
	console.log('arr=>', arr);

	if (arr.length === 1) return arr[0];

	// 加法计算
	let tmp = arr[0]; //* 取出第一位

	const add = (sum, cur) => {
		sum = sum.padStart(cur.length, '0');
		// console.log('sum=>', sum, 'cur=>', cur);
		let pos = sum.length - 1,
			result = '',
			flage = 0;
		while (pos >= 0) {
			const sum_tmp = sum[pos] * 1 + cur[pos] * 1 + flage;
			flage = 0;
			if (sum_tmp >= 10) {
				flage = 1;
				result = (sum_tmp % 10) + result;
			} else {
				result = sum_tmp + result;
			}
			pos--;
		}

		if (flage) {
			result = flage + result;
		}

		return result.padStart(sum.length, '0');
	};

	for (let index = 1; index < arr.length; index++) {
		const element = arr[index];
		// console.log('sum-result =>', add(tmp, element));
		tmp = add(tmp, element);
	}

	return tmp;
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length, 
        n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n- 1; j >= 0; j-- ) {
            const item1 = num1[i] * 1, item2 = num2[j] * 1;
            const mul = item1 * item2, 
                sum = mul + result[i + j + 1];
            
            result[i +  j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    };

    let resultStr = result.join('');

    while(resultStr[0] === '0') {
        resultStr = resultStr.slice(1);
    }

    return resultStr;
};

console.log(multiply('123456789', '987654321'));
// console.log(multiply('9', '9'));
