const questions = `
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。
`

//? 贪心思路
//? 1. 排序
//?  1. 孩子的胃口从小到大排序
//?  2. 饼干的大小从小到大排序
//? 2. 双指针
//?  1. 当前的饼干满足了孩子， 两个指针都前进， 满足的孩子数+1
//?  2. 当前的饼干不满足孩子， 饼干指针前进


/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b); // 按照胃口排序 👶
    s.sort((a,b) => a - b); //按照饼干大小排序 🍪

    let child = 0, cookie = 0,
        result = 0;

    while(child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            result++; //满足了一个孩子
            child++; // 下一个孩子 👶
        };
        cookie++; // 下一个饼干🍪
    }

    return result;
};


console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); //