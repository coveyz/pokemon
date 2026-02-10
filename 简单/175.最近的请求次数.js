const question = `
写一个 RecentCounter 类来计算特定时间范围内最近的请求。
请你实现 RecentCounter 类：
RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。
`;

var RecentCounter = function () {
	// 📝 用来记录每次访问的时间
	this.arr = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
	// 📝 记录当前访问的时间
	this.arr.push(t);

	// 📝 移除不在时间范围内的访问记录
	while (this.arr[0] < t - 3000) {
		this.arr.shift();
	}
	// 📝 返回在时间范围内的访问次数
	return this.arr.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
