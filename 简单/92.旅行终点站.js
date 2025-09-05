const question = `给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。
题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。`;

// 1. 将开始地点 放到开始数组里 
// 2. 将终点 放到结束数组当中
// 3. 如果终点数组中某个值 在开始数组中没有
// 4. 这个值 就是我要的终点了
const destCity = (paths) => {
	const resultDestPath = paths.reduce(
		(acc, cur) => {
			acc['start'].push(cur[0]);
			acc['end'].push(cur[1]);
			return acc;
		},
		{ start: [], end: [] }
	);

	const result = resultDestPath['end'].filter((item) => !resultDestPath['start'].includes(item))
	return result.toString()
};

console.log(
	destCity([
		['London', 'New York'],
		['New York', 'Lima'],
		['Lima', 'Sao Paulo'],
	])
);
console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity([["A","Z"]]))
