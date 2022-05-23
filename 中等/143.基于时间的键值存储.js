const question = `
设计一个基于时间的键值数据结构，该结构可以在不同时间戳存储对应同一个键的多个值，并针对特定时间戳检索键对应的值。
实现 TimeMap 类：
TimeMap() 初始化数据结构对象
void set(String key, String value, int timestamp) 存储键 key、值 value，以及给定的时间戳 timestamp。
String get(String key, int timestamp)
返回先前调用 set(key, value, timestamp_prev) 所存储的值，其中 timestamp_prev <= timestamp 。
如果有多个这样的值，则返回对应最大的  timestamp_prev 的那个值。
如果没有值，则返回空字符串（""）。
`;

var TimeMap = function () {
	this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
	if (this.map.has(key)) {
		this.map.get(key).push([value, timestamp]);
	} else {
		this.map.set(key, [[value, timestamp]]);
	}
	// console.log('time=>', this.map);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
	let pairs = this.map.get(key);
	// console.log('pairs=>', pairs);
	if (pairs) {
		let left = 0,
			right = pairs.length - 1;

		while (left <= right) {
			// let middle = Math.floor((right - left) / 2) + left;
			let middle = (right + left) >> 1;
			const time = pairs[middle][1];
			if (time === timestamp) {
				return pairs[middle][0];
			} else if (time > timestamp) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}

		if (right >= 0) {
			return pairs[right][0];
		}

		return '';
	}

	return '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
