
class MyHashMap{
    constructor(){
        this.map = new Map()
        
    }
    
    put(key, value) {
        this.map.delete(key)
        this.map.set(key, value)
    }
    
    get(key){
        if (!this.map.has(key)){
            return -1
        }
        const val = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, val)
        return val
    }
    remove(key){
        this.map.delete(key)
    }
}




// var MyHashMap = function() {
    
// };

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// MyHashMap.prototype.put = function(key, value) {
    
// };

/** 
 * @param {number} key
 * @return {number}
 */
// MyHashMap.prototype.get = function(key) {
    
// };

/** 
 * @param {number} key
 * @return {void}
 */
// MyHashMap.prototype.remove = function(key) {
    
// };

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */