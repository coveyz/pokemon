const question = `
学校的自助午餐提供圆形和方形的三明治，分别用数字 0 和 1 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。
餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 栈 里，每一轮：

如果队列最前面的学生 喜欢 栈顶的三明治，那么会 拿走它 并离开队列。
否则，这名学生会 放弃这个三明治 并回到队列的尾部。
这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。

给你两个整数数组 students 和 sandwiches ，其中 sandwiches[i] 是栈里面第 i​​​​​​ 个三明治的类型（i = 0 是栈的顶部）， students[j] 是初始队列里第 j​​​​​​ 名学生对三明治的喜好（j = 0 是队列的最开始位置）。请你返回无法吃午餐的学生数量。

`

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let position = 0;
    let rotations = 0; // 记录连续未匹配的轮数

    while(students.length) {
        if (position >= sandwiches.length) break;

        const student = students.shift(),
            sandwich = sandwiches[position];
        
        if (sandwich === student) {
            position++;
            rotations = 0; // 重置计数器
        } else {
            students.push(student);
            rotations++; // 增加未匹配计数
            
            // 如果所有学生都轮了一遍还没人要，说明陷入死循环
            if (rotations === students.length) {
                break;
            }
        }
    }

    return students.length;
};

/**
 ** 计数法
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count0 = 0, 
        count1 = 0;

    for(let student of students) {
        if (student === 0) count0++;
        else count1++;
    };

    for(let sandwich of sandwiches) {
        if (sandwich === 0) {
            if (count0 > 0) count0--;
            else break;
        } else {
            if (count1 > 0) count1--;
            else break;
        }
    };

    return count0 + count1;
};


console.log(countStudents([1,1,0,0], [0,1,0,1])); // 0
// console.log(countStudents([1,1,1,0,0,1], [1,0,0,1,0,1])); // 3