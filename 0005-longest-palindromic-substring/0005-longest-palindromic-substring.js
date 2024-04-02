/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
//search through array 
//keep record of highest number and longest string

let longestString = ""
let maxcount = 0 

function findLongest (l, r, s) {
    //condition if s[i] is squal s[y] and boundary is same 
    //example i = 0  for aba:  count is 1 and break
    //example i =1 for aba: count is 1 and than 3
    //example i =2 for aba: count is 1 and break 

    // second looop break immediately 

    while(s.charAt(l) === s.charAt(r) && l >= 0 && r < s.length){
        //if it's larger than current longestString
        // if l is 2  yis 3  slice 2 to 4
        if (s.slice(l, r+1).length > maxcount){
            maxcount = s.slice(l, r+1).length; 
            longestString = s.slice(l, r+1); 
        }
        l = l-1
        r = r+1
    }
}


for (let i = 0; i < s.length; i++){
    //odd number:  aba
     findLongest(i, i, s)
     //even number: abba
     findLongest(i, i+1, s)
    //event number 
}
return longestString

};