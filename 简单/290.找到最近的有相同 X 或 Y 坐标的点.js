const question = `
给你两个整数 x 和 y ，表示你在一个笛卡尔坐标系下的 (x, y) 处。同时，在同一个坐标系下给你一个数组 points ，其中 points[i] = [ai, bi] 表示在 (ai, bi) 处有一个点。当一个点与你所在的位置有相同的 x 坐标或者相同的 y 坐标时，我们称这个点是 有效的 。
请返回距离你当前位置 曼哈顿距离 最近的 有效 点的下标（下标从 0 开始）。如果有多个最近的有效点，请返回下标 最小 的一个。如果没有有效点，请返回 -1 。
两个点 (x1, y1) 和 (x2, y2) 之间的 曼哈顿距离 为 abs(x1 - x2) + abs(y1 - y2) 。`

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let min = Infinity, pos = -1

  const magic = (x1,y1,index) => {
    const result = Math.abs(x - x1) + Math.abs(y - y1);
    if (result < min ) {
      min = result;
      pos = index;
    }
  }


  for (let index = 0; index < points.length; index++) {
    const [x1, y1] = points[index];
    if (x1 === x || y1 === y) {
      magic(x1,y1,index)
    }
  }

  return pos
};


// const x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];
// const x = 3, y = 4, points = [[3,4]]
const x = 3, y = 4, points = [[2,3]]

console.log(nearestValidPoint(x,y,points))