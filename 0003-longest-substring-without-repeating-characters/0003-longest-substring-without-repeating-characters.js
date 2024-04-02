/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
// "abcabcbb"
// logic: we set up a start.  when the window slide to the i that is repeatd is in array. the sliding windows start will start from the next index of that array 
//abcdfcc// yoou either chose abcdf or dfc or dfc

let maxichar = 0 
let start = 0 
let wd = new Map()

for (let i = 0 ; i < s.length; i++){
    let char = s[i]
        if (wd.has(char) && wd.get(char) >= start){
            start = wd.get(char) + 1
        }
    wd.set(char, i)
    maxichar = Math.max(maxichar, i - start + 1)
}

return maxichar


};