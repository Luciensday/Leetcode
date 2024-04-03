/**
 * @param {number} capacity
 */

class LRUCache {
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
        
    }
    
    get(key) {
        //frest to see if key exist
        if (!this.map.has(key)){return -1}
        let val = this.map.get(key)
        this.map.delete(key); 
        this.map.set(key, val)
        return val
    }
    
    
    put(key, value) {
        this.map.delete(key)
        this.map.set(key, value)
        
        if(this.capacity < this.map.size){
            let first = this.map.keys().next().value
            this.map.delete(first)
        }
    }
}



  



// var LRUCache = function(capacity) {
    
    
    
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
    
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
    
// };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//capacity 
// int get(init key) if !something has key return -1
// void put (int key, int value)if !something has key somemap.set(key, value): 