const question = `
你有一个只支持单个标签页的 浏览器 ，最开始你浏览的网页是 homepage ，你可以访问其他的网站 url ，也可以在浏览历史中后退 steps 步或前进 steps 步。
请你实现 BrowserHistory 类：
BrowserHistory(string homepage) ，用 homepage 初始化浏览器类。
void visit(string url) 从当前页跳转访问 url 对应的页面  。执行此操作会把浏览历史前进的记录全部删除。
string back(int steps) 在浏览历史中后退 steps 步。如果你只能在浏览历史中后退至多 x 步且 steps > x ，那么你只后退 x 步。请返回后退 至多 steps 步以后的 url 。
string forward(int steps) 在浏览历史中前进 steps 步。如果你只能在浏览历史中前进至多 x 步且 steps > x ，那么你只前进 x 步。请返回前进 至多 steps步以后的 url 。
`;
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
	this.curIndex = 0;
	this.BrowserHistoryArr = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
	//* 1.0 如果 curIndex = BrowserHistoryArr.length - 1 说明当前在最后 直接push
	//* 2.0 如果 curIndex !==  BrowserHistoryArr.length - 1 说明不再最后  需要替代

	this.BrowserHistoryArr.splice(this.curIndex + 1, this.BrowserHistoryArr.length - 1 - this.curIndex, url);
	this.curIndex += 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
	this.curIndex = this.curIndex - steps <= 0 ? 0 : this.curIndex - steps;
	return this.BrowserHistoryArr[this.curIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
	this.curIndex = this.curIndex + steps >= this.BrowserHistoryArr.length - 1 ? this.BrowserHistoryArr.length - 1 : this.curIndex + steps;
	return this.BrowserHistoryArr[this.curIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
