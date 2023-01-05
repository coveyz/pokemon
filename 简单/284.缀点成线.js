const question = `
给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。
`;

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	if (coordinates.length < 3) return true;
	const len = coordinates.length;
	let left = 0,
		right = 2;

	while (right < len) {
		const [x1, y1] = coordinates[left],
			[x2, y2] = coordinates[(left + right) >> 1],
			[x3, y3] = coordinates[right];
		const R1 = x2 - x1,
			C1 = y2 - y1,
			R2 = x3 - x2,
			C2 = y3 - y2;

		if (R1 * C2 !== R2 * C1) return false;

		left++;
		right++;
	}

	return true;
};

// const coordinates = [
// 	[1, 1],
// 	[2, 2],
// 	[3, 4],
// 	[4, 5],
// 	[5, 6],
// 	[7, 7],
// ];

const coordinates = [[0,0],[0,5],[5,5],[5,0]]


console.log(checkStraightLine(coordinates));
