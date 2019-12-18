const question = `给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
输入为三个整数：day、month 和 year，分别表示日、月、年。
您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。`;

const dayOfTheWeek = (day, month, year) => {
	let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	let date = new Date();
	date.setFullYear(year);
	date.setMonth(month - 1);
	date.setDate(day);
	return arr[date.getDay()];
};

console.log(dayOfTheWeek(18, 7, 1999));
