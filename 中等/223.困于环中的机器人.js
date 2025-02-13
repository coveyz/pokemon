const question = `
在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。注意:

北方向 是y轴的正方向。
南方向 是y轴的负方向。
东方向 是x轴的正方向。
西方向 是x轴的负方向。
机器人可以接受下列三条指令之一：

"G"：直走 1 个单位
"L"：左转 90 度
"R"：右转 90 度
机器人按顺序执行指令 instructions，并一直重复它们。

只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。
`

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const directions = [
        [0, 1], // North
        [1, 0], // East
        [0, -1], // South
        [-1, 0] // West
    ];
    let x = 0, y = 0,
        dir = 0;
    
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        if (instruction === 'G')  {
            x += directions[dir][0];
            y += directions[dir][1];
        } 
        else if (instruction === 'L')  {
            dir = (dir + 3) % 4;
        }
        else if (instruction === 'R') {
            dir = (dir + 1) % 4;
        };
        
    };

    return (x === 0 && y == 0) || dir !== 0;
};


// console.log(isRobotBounded('GGLLGG'))
// console.log(isRobotBounded('GG'))
// console.log(isRobotBounded('GL'))
console.log(isRobotBounded('RLLGGLRGLGLLLGRLRLRLRRRRLRLGRLLLGGL'))