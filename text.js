const magic = (arr) => {
	return arr.sort((a, b) => {
		if (a === 0) {
			return a - b;
		}
	});
};

console.log(magic([0, 2, 1, 0, 3, 6, 7, 1, 0, 3]));
