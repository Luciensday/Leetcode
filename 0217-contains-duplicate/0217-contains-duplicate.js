/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    return new Set(nums).size !== nums.length
    
};

// nums arrays at least twice. false 
// hash table 