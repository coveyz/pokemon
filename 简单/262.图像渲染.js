const question = `
有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
最后返回 经过上色渲染后的图像 。
`;

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
	const m = image.length,
		n = image[0].length,
		oldColor = image[sr][sc];

	if (newColor === oldColor) return image;

	const fill = (i, j) => {
		if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== oldColor) {
			return;
		}
		image[i][j] = newColor;
		fill(i - 1, j);
		fill(i + 1, j);
		fill(i, j - 1);
		fill(i, j + 1);
	};

	fill(sr, sc);
	return image;
};

let image = [
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	],
	sr = 1,
	sc = 1,
	newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
