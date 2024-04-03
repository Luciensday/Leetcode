
class MyHashSet {
    constructor() {
        this.map = new Map();
    }
    
    add(key) {
        this.map.set(key, true);
    }
    
    contains(key) {
        return this.map.has(key);
    }
    
    remove(key) {
        this.map.delete(key);
    }
}





/** 
 * @param {number} key
 * @return {void}
 */
// MyHashSet.prototype.add = function(key) {
    
// };

/** 
 * @param {number} key
 * @return {void}
 */
// MyHashSet.prototype.remove = function(key) {
    
// };

/** 
 * @param {number} key
 * @return {boolean}
 */
// MyHashSet.prototype.contains = function(key) {
    
// };

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */