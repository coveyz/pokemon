const question = `
请你设计一个管理 n 个座位预约的系统，座位编号从 1 到 n 。
请你实现 SeatManager 类：
SeatManager(int n) 初始化一个 SeatManager 对象，它管理从 1 到 n 编号的 n 个座位。所有座位初始都是可预约的。
int reserve() 返回可以预约座位的 最小编号 ，此座位变为不可预约。
void unreserve(int seatNumber) 将给定编号 seatNumber 对应的座位变成可以预约。
`


/**
 * @param {number} n
 */
var SeatManager = function (n) {
	// this.sets = new Array(n).fill().map((_, index) => ({ index: index, flage: true }));
	// this.sets = new Array(n).fill().map((_, index) => index + 1);
	this.queue = new MinPriorityQueue();
	for (let index = 1; index <= n; index++) {
		this.queue.enqueue(index);
	}
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
	// const item = this.sets.find((item) => item['flage']);
	// item['flage'] = false;
	// return item['index'] + 1;
	return this.queue.dequeue().element;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
	// this.sets[seatNumber - 1]['flage'] = true;
	// this.queue.enqueue(seatNumber);
	this.queue.enqueue(seatNumber);
};




/**
 ** 指针🎸
 * @param {number} n
 */
var SeatManager = function (n) {
	this.seats = new Array(n).fill(0).map((item, index) => n - index); // 全量的坐位
	this.cacheSeats = [];
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
	if (this.cacheSeats.length === 0) {
		return this.seats.pop();
	} else {
		const cacheSeatfirst = this.cacheSeats[this.cacheSeats.length - 1],
			seatsfist = this.seats[this.seats.length - 1];
		// console.log('cacheSeatfirst=>', cacheSeatfirst, 'seatsfist=>', seatsfist);
		if (cacheSeatfirst > seatsfist) {
			return this.seats.pop();
		} else {
			return this.cacheSeats.pop();
		}
	}
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
	this.cacheSeats.push(seatNumber);
	this.cacheSeats.sort((a, b) => b - a);
	// console.log('cache->', this.cacheSeats);
};




/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

// const obj = new SeatManager(5);
// console.log(obj.reserve());
// console.log(obj.reserve());
// console.log(obj.unreserve(2));
// console.log(obj.reserve());
// console.log(obj.reserve());
// console.log(obj.reserve());
// console.log(obj.reserve());
// console.log(obj.unreserve(5));
// console.log(obj.sets);
