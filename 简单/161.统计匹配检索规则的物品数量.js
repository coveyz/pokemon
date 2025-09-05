const question = `
给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。
另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。
如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：
ruleKey == "type" 且 ruleValue == typei 。
ruleKey == "color" 且 ruleValue == colori 。
ruleKey == "name" 且 ruleValue == namei 。
统计并返回 匹配检索规则的物品数量 。
`;
// const countMatches = (item, ruleKey, ruleValue) => {
// 	const integrationDataOfObj = item.reduce((acc, cur) => {
// 		acc.push({ type: cur[0], color: cur[1], name: cur[2] });
// 		return acc;
// 	}, []);
// 	const filterArr = integrationDataOfObj.filter((item) => item[ruleKey] === ruleValue);
// 	return filterArr.length;
// };

const countMatches = (item, ruleKey, ruleValue) => {
	return (filterRequestNumber = item.reduce((acc, cur) => {
		if (ruleKey === 'type') {
			acc = cur[0] === ruleValue ? acc + 1 : acc;
		} else if (ruleKey === 'color') {
			acc = cur[1] === ruleValue ? acc + 1 : acc;
		} else if (ruleKey === 'name') {
			acc = cur[2] === ruleValue ? acc + 1 : acc;
		}

		return acc;
	}, 0));
};

console.log(
	countMatches(
		[
			['phone', 'blue', 'pixel'],
			['computer', 'silver', 'lenovo'],
			['phone', 'gold', 'iphone'],
		],
		'color',
		'silver'
	)
);

console.log(
	countMatches(
		[
			['phone', 'blue', 'pixel'],
			['computer', 'silver', 'phone'],
			['phone', 'gold', 'iphone'],
		],
		'type',
		'phone'
	)
);
