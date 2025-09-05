const question = `请你设计一个日志系统，可以流式接收日志以及它的时间戳。
该日志会被打印出来，需要满足一个条件：当且仅当日志内容 在过去的 10 秒钟内没有被打印过。
给你一条日志的内容和它的时间戳（粒度为秒级），如果这条日志在给定的时间戳应该被打印出来，则返回 true，否则请返回 false。
要注意的是，可能会有多条日志在同一时间被系统接收。`;

/**
 * Initialize your data structure here.
 */
var Logger = function () {
	this.obj = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
	// 先判断 有没有
	// 没有的话 直接存 并且 return true 并且 存值
	// 有的话  判断 时间是不是在 10s 内
	// 10s 内的话 return fasle
	// 超过10s return true 并且 修改值

	if (this.obj[message] !== 'undefined') {
		// 有的话  判断 时间是不是在 10s 内
		const result = timestamp - this.obj[message];
		if (result < 10) {
			return false;
		} else {
			this.obj[message] = timestamp;
			return true;
		}
	} else {
		// 没有的话 直接存 并且 return true 并且 存值
		this.obj[message] = timestamp;
		return true;
	}
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

// Logger logger = new Logger();
