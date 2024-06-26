/**
 * @param {number[]} nums
 */

class NumArray {
    constructor(nums){
        this.nums = nums
    }
    
    sumRange(left, right){
        
        let sum = 0 
        for (let i = left; i<= right; i++){
            sum += this.nums[i]
        } 
        return sum
    }
    
}
// var NumArray = function(nums) {
    
// };

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
// NumArray.prototype.sumRange = function(left, right) {
    
// };

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */