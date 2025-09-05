const question = `国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。`;

const morsList = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..'
];
// 字母表
const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uniqueMorseRepresentations = words => {
	// 将串来的单词生成对应的 摩斯密码
	const morsArr = words.reduce((acc, cur) => {
		let kongjian = '';
		for (let index = 0; index < cur.length; index++) {
			const position = Alphabet.indexOf(cur[index]);
			kongjian = kongjian + morsList[position];
		}
		acc.push(kongjian);
		return acc;
	}, []);
  
  const filterArr = morsArr.reduce((acc,cur) => {
    
    if (acc.indexOf(cur) === -1) {
      acc.push(cur)
    }
    return acc
  },[]) 
  return filterArr.length
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
