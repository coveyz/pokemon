const question = `不使用任何内建的哈希表库设计一个哈希集合
具体地说，你的设计应该包含以下的功能
add(value)：向哈希集合中插入一个值。
contains(value) ：返回哈希集合中是否存在这个值。
remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。`

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  var obj = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.obj[key] = 'xxx'
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  delete this.obj[key]
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.obj[key] === undefined ? false : true
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */




/** 拉链法 */
var MyHashSet = function() {
    this.size = 769;
    this.buckets = Array.from({length: this.size}, () => null);
};

MyHashSet.prototype._hash = function(key) {
    return key % this.size;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this._hash(key);
    let node = this.buckets[idx];
    while(node) {
        if (node.val === key) return;
        node = node.next;
    };

    this.buckets[idx] = {val: key, next: this.buckets[idx]};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this._hash(key);
    let node = this.buckets[idx], 
        prev = null;

    while(node) {
        if (node.val === key) {
            if (prev) prev.next = node.next;
            else this.buckets[idx] = node.next;
            return;
        };
        prev = node;
        node = node.next;
    };
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this._hash(key);
    let node = this.buckets[idx];

    while(node) {
        if (node.val === key) return true;
        node = node.next;
    };

    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */