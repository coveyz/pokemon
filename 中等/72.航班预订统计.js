const question = `
这里有 n 个航班，它们分别从 1 到 n 进行编号。
有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数。
`;
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
	const arr = new Array(n).fill(0);

	for (let index = 0; index < bookings.length; index++) {
		const element = bookings[index];
		const [first, last, set] = element;
		for (let key = first - 1; key < last; key++) {
			arr[key] = arr[key] + set;
		}
	}

	return arr;
};

console.log(
	corpFlightBookings(
		[
			[1, 2, 10],
			[2, 3, 20],
			[2, 5, 25],
		],
		5
	)
);
console.log(
	corpFlightBookings(
		[
			[1, 2, 10],
			[2, 2, 15],
		],
		2
	)
);
