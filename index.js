/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count0 = 0, 
        count1 = 0;

    for(let sandwich of sandwiches) {
        if (sandwich === 0) count0++;
        else count1++;
    };

    console.log({count0, count1});

    for(let student of students) {
        if (student === 0) {
            count0--;
            if (count0 <= 0) break;
        } else {
            count1--;
            if (count1 <= 0) break;
        }
    };

    return count0 + count1;
};

console.log(countStudents([1,1,0,0], [0,1,0,1])) // 0
// console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) // 3