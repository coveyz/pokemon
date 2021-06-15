const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const dirOp = promisify(fs.readdir);

const exercise_Number = async () => {
	const curDir = path.resolve(__dirname);
	//* 查找当前文件夹 所有的文件夹
	const dirInfo = await dirOp(curDir); //* 得到当前文件下<力扣> 所有的文件文件夹

	const exercise_dir = dirInfo.filter((info) => fs.lstatSync(info).isDirectory() && info !== '.git');

	return await exercise_dir.reduce(async (acc, cur) => {
		const item = await dirOp(cur);
		// console.log(item);
		acc = (await acc) + item.length;
		return acc;
	}, 0);
};

exercise_Number().then((count) => {
	console.log(`一共写了 ${count} 道题 🔫`);
});
