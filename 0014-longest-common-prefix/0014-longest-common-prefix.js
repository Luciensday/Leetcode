/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

// a b c   length 3
// 0 1 2

//[gom, go, gooooo]
//[st, string, striiii]
if (strs.length === 0 ){
    return ""
}
// a random one of first word in array as base
let base = strs[0]
for (let i = 0; i < base.length; i++ ){
    for (let word = 1; word < strs.length ; word++ ){
        // i === word.length is to prevent non-base case are shortest
        if ( base[i] !== strs[word][i] || i === strs[word].length){
            return base.slice(0, i)
        }
    }
//otherwise basecase is longest

}
 return base
};