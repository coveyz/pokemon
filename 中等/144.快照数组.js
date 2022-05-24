const question = `
实现支持下列接口的「快照数组」- SnapshotArray：
SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
void set(index, val) - 会将指定索引 index 处的元素设置为 val。
int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
`;

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
	this.arr = new Array(length).fill(0).map(() => new Map());
	console.log('arr=>', this.arr);
	this.snap_id = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
	this.arr[index].set(this.snap_id, val);
	console.log('set=>', this.arr);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
	this.snap_id++;
	return this.snap_id - 1;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
	const snapIds = [...this.arr[index].keys()];
	console.log('ids=>', snapIds, snap_id);
	let left = 0,
		right = snapIds.length - 1;
	while (left <= right) {
		const middle = (left + right) >> 1;
		if (snapIds[middle] === snap_id) {
			return this.arr[index].get(snap_id);
		} else if (snapIds[middle] > snap_id) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return this.arr[index].get(snapIds[left - 1]) || null;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

var snapshotArr = new SnapshotArray(3);
snapshotArr.set(0, 5);
snapshotArr.snap();
snapshotArr.set(0, 6);
console.log(snapshotArr.get(0, 0));
