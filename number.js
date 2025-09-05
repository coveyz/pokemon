const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const dirOp = promisify(fs.readdir);

const exercise_Number = async () => {
	const curDir = path.resolve(__dirname),
		dirInfo = await dirOp(curDir);

	const exercise_dir = dirInfo.filter((info) => fs.lstatSync(info).isDirectory() && info !== '.git' && info !== '.vscode');

	const promises = exercise_dir.map(async dir => {
		const item = await dirOp(dir);
		const jsFiles = item.filter(name => name.endsWith('.js'));
    	return jsFiles.length;
	})
	const counts = await Promise.all(promises);

	return counts.reduce((acc,cur) => acc + cur, 0);
};

exercise_Number().then((count) => {
	console.log(`一共写了 ${count} 道题 🔫`);
});



