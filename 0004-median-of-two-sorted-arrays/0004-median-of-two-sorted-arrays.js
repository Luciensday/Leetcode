/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
const arr = nums1.concat(nums2)
const sorted = arr.sort((a,b)=> a-b)


if (sorted.length % 2 === 0 ) {
let prei = (sorted.length /2) -1
let posti = sorted.length /2
return (sorted[prei] + sorted[posti] ) /2

}else {
    let i = (sorted.length -1 )/2
    return sorted[i]
    


}
    
};