const question = `
在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
`


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;

    for (let index = 0; index < gas.length; index++) {
        totalGas += gas[index] - cost[index];
        currentGas += gas[index] - cost[index];

        if (currentGas < 0) {
            start = index + 1;
            currentGas = 0
        }
    }

    return totalGas < 0 ? -1 : start;
};


const gas = [1,2,3,4,5], cost = [3,4,5,1,2];

console.log(canCompleteCircuit(gas,cost))