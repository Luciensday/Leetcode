​
class LRUCache {
constructor(capacity) {
this.map = new Map();
this.capacity = capacity;
}
//constructor
​
get(key) {
if (!this.map.has(key)) return -1;
//the reason to get the value it's easier to set it somewhere with key value pair
const val = this.map.get(key);
// no where where is it the key value pair. because it just click so need to move the back of list
this.map.delete(key);
this.map.set(key, val);
return val;
}
​
put(key, value) {
//remove the current key value pari in order to move the the end of list
this.map.delete(key);
//move (add) to the end of the list of this key value pair
this.map.set(key, value);
if (this.map.size > this.capacity) {
//because if Map so has its order   when use .next() will return first item
const firstItem = this.map.keys().next().value;
this.map.delete(firstItem);
}
}
}
​