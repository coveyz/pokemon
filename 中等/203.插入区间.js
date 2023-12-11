const question = `
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
`

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const newMergeOrder = [].concat([...intervals]).concat([newInterval]).sort((a,b) => a[0] - b[0]);

    const arr = [];

    for (let index = 0; index < newMergeOrder.length; index++) {
        const curItem = newMergeOrder[index];

        if (index === 0) arr.push(curItem);
        const arrLastItem = arr[arr.length - 1];

        if (Math.max(curItem[0], arrLastItem[0]) <= Math.min(curItem[1], arrLastItem[1])) {
            arrLastItem[0] = Math.min(curItem[0], arrLastItem[0]);
            arrLastItem[1] = Math.max(curItem[1], arrLastItem[1]);
        } else {
            arr.push(curItem);
        }

    }


    return arr;
};

// const intervals = [[1,3],[6,9]], newInterval = [2,5];
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];

console.log(insert(intervals, newInterval));