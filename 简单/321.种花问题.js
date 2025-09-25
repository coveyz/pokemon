const question = `
假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。
`

//?   贪心思路（核心策略
//? 1. 当前位置 0 （没种花
//? 2. 左边为 0 或者 边界
//? 3. 右边为 0 或者 边界

//? 算法步骤
//? 1. 左到右 遍历数组
//? 2. 检查当前位置是否满足种花条件
//? 3. 如果可以种  设置为1， n减少
//?     1. 检查 是否已经够了


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 1) continue;

        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
        
        if (prev === 0 && next === 0) {
            flowerbed[i] = 1;
            n--;
            if (n <= 0) return true;
        }
    };

    return n <= 0;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2))
console.log(canPlaceFlowers([0,0,1,0,0], 1)) // true