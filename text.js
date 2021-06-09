var magic = {};

const flatten = (obj, pre = '') => {
	if (typeof obj !== 'object') {
		magic[pre] = obj;
	} else {
		Object.keys(obj).forEach((key) => {
			if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
				magic[`${pre}${key}`] = obj[key];
			} else {
				defineReactive(obj[key], pre !== '' ? pre + key : key);
			}
		});
	}
	return magic;
};

const defineReactive = (obj, key) => {
	if (Array.isArray(obj)) {
		for (let index = 0; index < obj.length; index++) {
			const element = obj[index];
			const pre = `${key}[${index}]${judeType(element) === 'Object' ? '.' : ''}`;
			flatten(element, pre);
		}
	} else {
		Object.keys(obj).forEach((name) => {
			const value = obj[name];
			const pre = `${key}.${name}${judeType(value) === 'Object' ? '.' : ''}`;
			flatten(value, pre);
		});
	}
};

const judeType = (data) => {
	return Object.prototype.toString.call(data).slice(8, -1);
};

console.log(
	flatten({
		a: {
			b: 1,
			c: 2,
			d: { e: 5, q: [1, 3, { a: 2, b: 3 }] },
		},
		b: [1, 3, { a: 2, b: 3 }],
		c: 3,
	})
);
