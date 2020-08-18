const fs = require('fs');
const path = require('path');

function dirlenth(dir, type) {
	return new Promise((resolve) => {
		fs.readdir(`${dir}`, (err, data) => {
			resolve(type === 'dir' ? data : data.length);
		});
	});
}

const countFileOfDie = async () => {
	// 先获取当前文件 同级 所有文件
	const totalFile = await dirlenth(path.resolve(__dirname), 'dir');

	// 过滤掉不是文件夹的
	const dirArr = totalFile
		.filter((item) => {
			return fs.lstatSync(item).isDirectory();
		})
		.slice(1)
		.reduce((acc, cur) => {
			acc.push(dirlenth(cur));
			return acc;
		}, []);

	return await (await Promise.all(dirArr)).reduce((acc, cur) => {
		acc += cur;
		return acc;
	}, 0);
};

countFileOfDie().then((count) => {
	console.log(`一共写了 ${count} 道题 🔫`);
});
