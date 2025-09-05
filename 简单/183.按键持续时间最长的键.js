const question = `
LeetCode 设计了一款新式键盘，正在测试其可用性。测试人员将会点击一系列键（总计 n 个），每次一个。
给你一个长度为 n 的字符串 keysPressed ，其中 keysPressed[i] 表示测试序列中第 i 个被按下的键。releaseTimes 是一个升序排列的列表，其中 releaseTimes[i] 表示松开第 i 个键的时间。字符串和数组的 下标都从 0 开始 。第 0 个键在时间为 0 时被按下，接下来每个键都 恰好 在前一个键松开时被按下。
测试人员想要找出按键 持续时间最长 的键。第 i 次按键的持续时间为 releaseTimes[i] - releaseTimes[i - 1] ，第 0 次按键的持续时间为 releaseTimes[0] 。
注意，测试期间，同一个键可以在不同时刻被多次按下，而每次的持续时间都可能不同。
请返回按键 持续时间最长 的键，如果有多个这样的键，则返回 按字母顺序排列最大 的那个键。
`;
var slowestKey1 = function (releaseTimes, keysPressed) {
	const obj = {};
	let maxNumber;
	for (let index = 0; index < keysPressed.length; index++) {
		const element = keysPressed[index];
		//* 第一次
		if (index === 0) {
			obj[element] = releaseTimes[index];
			maxNumber = releaseTimes[index];
		}
		//* 第二次
		else {
			const result = releaseTimes[index] - releaseTimes[index - 1];
			obj[element] = Math.max(result, obj[element] ? obj[element] : 0);
			if (maxNumber < result) maxNumber = result;
		}
	}
	const arr = [];
	Object.keys(obj).forEach((key) => {
		if (obj[key] === maxNumber) {
			arr.push(key);
		}
	});
	return arr.sort()[arr.length - 1];
};
var slowestKey = function (releaseTimes, keysPressed) {
	let max = 0;
	let code = '';
	for (let index = 0; index < keysPressed.length; index++) {
		const key = keysPressed[index];
		let time = releaseTimes[index] - (releaseTimes[index - 1] || 0);
		if (max < time || (max === time && code < key)) {
			max = time;
			code = key;
		}
	}

	return code;
};

console.log(slowestKey([9, 29, 49, 50], 'cbcd'));
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda'));
console.log(slowestKey([1, 2, 3], 'aba'));
