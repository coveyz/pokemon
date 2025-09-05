const question = `给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。`;

const dayOfYear = (date) => {
	const dataArr = date.split('-');
	const year = Number(dataArr[0]);
	const isrun = (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
	const month = Number(dataArr[1]);
	const monthDay = [0, 31, isrun ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const day = Number(dataArr[2]);

	let allDay = 0;
	for (let index = 0; index < month; index++) {
		allDay += monthDay[index];
	}
	return allDay + day;
};

console.log(dayOfYear('2019-01-09'));
console.log(dayOfYear('2019-02-10'));
console.log(dayOfYear('2003-03-01'));
console.log(dayOfYear('2004-03-01'));
