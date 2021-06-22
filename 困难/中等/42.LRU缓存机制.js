const question = `运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
`;

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity; // 容量
	this.arr = [];
	this.obj = {};
	this.optionTime = 1;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	/** 1.如果存在  获取value, 并且 操作时间给个最新的, 操作时间 + 1 */
	if (this.obj[key]) {
		this.obj[key]['time'] = this.optionTime;
		this.optionTime += 1;
		return this.obj[key]['value'];
	} else {
		return -1;
	}
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	/** 1.先判断存在不存在 */
	/** 1-1. 如果存在 value,time 覆盖, 并且时间 + 1 */
	/** 1-2  如果不存在 判断 长度 */
	/** 2. 判断缓存容量是否达到上限定 */
	/** 2-1 如果没有达到上限,数组追加 obj记录, time + 1 */
	/** 2-2 达到上限 寻找 时间最老得 key*/
	/** 2-3 将他从 数组删除掉 并且 从 obj 删除掉 */
	/** 2-4 执行 2-1 */

	// 1
	if (this.obj[key]) {
		// 1-1.
		this.obj[key] = { value: value, time: this.optionTime };
		this.optionTime += 1;
	}
	// 1-2.
	else {
		// 2
		// 2-1
		if (this.arr.length < this.capacity) {
			this.arr.push(key);
			this.obj[key] = { value: value, time: this.optionTime };
			this.optionTime += 1;
		} else {
			// 2-2
			const longestTime = minOldTime(this.obj);
			// 2-3
			this.arr = this.arr.filter((item) => item !== longestTime);
			delete this.obj[longestTime];
			this.arr.push(key);
			this.obj[key] = { value: value, time: this.optionTime };
			this.optionTime += 1;
		}
	}
};

const minOldTime = (obj) => {
	var oldKey = '';
	var oldTime = Infinity;
	Object.keys(obj).forEach((key) => {
		if (obj[key]['time'] < oldTime) {
			oldKey = key;
			oldTime = obj[key]['time'];
		}
	});

	return oldKey;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
