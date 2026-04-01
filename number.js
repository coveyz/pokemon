/** 🏂 1. 总共多少道题 */

// const fs = require('fs');
// const path = require('path');
// const { promisify } = require('util');
// const dirOp = promisify(fs.readdir);

// const exercise_Number = async () => {
// 	const curDir = path.resolve(__dirname),
// 		dirInfo = await dirOp(curDir);

// 	const exercise_dir = dirInfo.filter((info) => fs.lstatSync(info).isDirectory() && info !== '.git' && info !== '.vscode');

// 	const promises = exercise_dir.map(async dir => {
// 		const item = await dirOp(dir);
// 		const jsFiles = item.filter(name => name.endsWith('.js'));
//     	return jsFiles.length;
// 	})
// 	const counts = await Promise.all(promises);

// 	return counts.reduce((acc,cur) => acc + cur, 0);
// };

// exercise_Number().then((count) => {
// 	console.log(`一共写了 ${count} 道题 🔫`);
// });



/** 🏂 2. 分别计算 */
const fs = require('fs/promises');
const path = require('path');

const countJsFilesRecursive = async (dir) => {
	let count = 0;
	const entries = await fs.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			count += await countJsFilesRecursive(fullPath);
		} else if (entry.isFile() && entry.name.endsWith('.js')) {
			count+= 1;
		};
	};

	return count;
};


const main = async () => {
	const root = __dirname;

	const folders = [
		{label: '简单', name: '简单'},
		{label: '中等', name: '中等'},
		{label: '困难', name: '困难'},
	];

	const results = {};

	await Promise.all(
		folders.map(async({label, name}) => {
			const dir = path.join(root, name);

			try {
				results[label] = await countJsFilesRecursive(dir);
			} catch (error) {
				if (error.code === 'ENOENT') results[label] = 0;
				else throw error;				
			};
		})
	);

	const total = results['简单'] + results['中等'] + results['困难'];

	console.log(`🟢 简单：${results['简单']} 道题`);
	console.log(`🟡 中等：${results['中等']} 道题`);
	console.log(`🔴 困难：${results['困难']} 道题`);
	console.log(`🔫 总共：${total} 道题`);
};


main().catch((err) => {
	console.error(err);
	process.exit(1);
})