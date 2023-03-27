/**
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

var obj = new SeatManager(5);
console.log('param1=>', obj.reserve());
console.log('param1=>', obj.reserve());
obj.unreserve(2);
console.log('param1=>', obj.reserve());
console.log('param1=>', obj.reserve());
console.log('param1=>', obj.reserve());
obj.unreserve(5);
