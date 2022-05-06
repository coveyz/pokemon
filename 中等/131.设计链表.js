const question = `
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
在链表类中实现这些功能：
get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
`;

var MyLinkedList = function () {
	this.Node = function (data) {
		this.data = data;
		this.next = null;
	};
	this.length = 0;
	this.head = null;
	this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index > this.length - 1) return -1;
	let find_index = 0,
		current_node = this.head;
	console.log(this.length);
	while (find_index < index) {
		find_index += 1;
		current_node = current_node.next;
	}

	return current_node.data;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	var node = new this.Node(val);
	if (this.head === null) {
		this.head = node;
		this.tail = this.head;
	} else {
		node.next = this.head;
		this.head = node;
	}
	this.length += 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	var node = new this.Node(val);
	if (this.head === null) {
		this.head = node;
		this.tail = this.head;
	} else {
		this.tail.next = node;
		this.tail = node;
	}
	this.length += 1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index < 0 || index > this.length) return -1;
	else if (index === this.length) return this.addAtTail(val);
	else {
		var new_node = new this.Node(val);
		if (index === 0) {
			new_node.next = this.head;
			this.head = new_node;
		} else {
			let current_index = 1,
				current_node = this.head;
			while (current_index < index) {
				current_index += 1;
				current_node = current_node.next;
			}
			let next_node = current_node.next;
			current_node.next = new_node;
			new_node.next = next_node;
		}
	}
	this.length += 1;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index > this.length - 1) return;
	let del_node = null;
	if (index === 0) {
		del_node = this.head;
		this.head = this.head.next;
	} else {
		let remove_index = 0,
			current_node = this.head,
			pre_node = null;
		while (remove_index < index) {
			remove_index += 1;
			pre_node = current_node;
			current_node = current_node.next;
		}
		del_node = current_node;
		let next_node = current_node.next;
		pre_node.next = next_node;
		if (current_node.next === null) {
			this.tail = pre_node;
		}
	}

	this.length -= 1;
	return del_node;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
