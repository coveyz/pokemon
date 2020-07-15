const question = `平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。
你可以按照下面的规则在平面上移动：
每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
必须按照数组中出现的顺序来访问这些点`;

const minTimeToVisitAllPoints = (ponits) => {
  const len = ponits.length - 1
  let number = 0
  for (let index = 0; index < len; index++) {
    const element = ponits[index];
    const nextElement = ponits[index + 1]

    const start = Math.abs(element[0]-nextElement[0])
    const end = Math.abs(element[1]-nextElement[1])

    number += Math.max(start,end)
  }

  return number
};

console.log(
	minTimeToVisitAllPoints([
		[1, 1],
		[3, 4],
		[-1, 0],
	])
);


console.log(
	minTimeToVisitAllPoints( [[3,2],[-2,2]])
);

