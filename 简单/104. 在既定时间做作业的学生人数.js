const question = `给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。
已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。
请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。`;

const busyStudent = (startTime, endTime, queryTime) => {
  return startTime.filter((item,index) => {
    return item <= queryTime && endTime[index] >= queryTime
  }).length
};

console.log(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5));
console.log(busyStudent([1,2,3],[3,2,7], 4));
