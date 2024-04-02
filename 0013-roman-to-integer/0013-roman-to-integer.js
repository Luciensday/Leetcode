/**
 * @param {string} s
 * @return {number}
 */
const converter = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L":50,
    "X":10,
    "V": 5, 
    "I": 1
}


var romanToInt = function(s) {
let counter = 0 
    
for (let i = 0; i < s.length; i++ ){
    let current = converter[s[i]]
    let next = converter[s[i+1]]

    if (next > current) {
        counter += (next - current); 
        i ++
    } else {
        counter += current
    }
    
}
return counter
    
}