const question = `设计一个敲击计数器，使它可以统计在过去5分钟内被敲击次数。
每个函数会接收一个时间戳参数（以秒为单位），你可以假设最早的时间戳从1开始，且都是按照时间顺序对系统进行调用（即时间戳是单调递增）。
在同一时刻有可能会有多次敲击。`;

/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
	this.obj = {};
};

/**
* Record a hit.
      @param timestamp - The current timestamp (in seconds granularity). 
* @param {number} timestamp
* @return {void}
*/
HitCounter.prototype.hit = function (timestamp) {
	if (this.obj[timestamp]) {
		this.obj[timestamp] += 1;
	} else {
		this.obj[timestamp] = 1;
	}
};

/**
* Return the number of hits in the past 5 minutes.
      @param timestamp - The current timestamp (in seconds granularity). 
* @param {number} timestamp
* @return {number}
*/
HitCounter.prototype.getHits = function (timestamp) {
	const arr = [];
	Object.keys(this.obj).forEach((key) => {
		// 大于 5min
		if (timestamp > 300) {
			const min = timestamp - 300;
			const max = timestamp;
			if (key > min && key <= max) {
				arr.push(this.obj[key]);
			}
		}
		// 小于 5min
		else {
			arr.push(this.obj[key]);
		}
	});

	return arr.reduce((acc, cur) => {
		acc += cur;
		return acc;
	}, 0);
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
