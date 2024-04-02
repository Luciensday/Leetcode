/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    //"{[]}" True 
    //"{[}]"False
    //"{}[]"" True 
    // 1st case is next 

let stack = []; 

 for (let el of s)  {
     if ( el === "(" ||  el === "{" ||  el === "[" ){
         stack.push(el) 
     } else  { 
         // after loopiing through all opening bracket  if there is no open bracket
         if (!stack.length 
         ||  ( el === ")"  && stack[stack.length -1] !== "(")
         ||  ( el === "}"  && stack[stack.length -1] !== "{")
         ||  ( el === "]"  && stack[stack.length -1] !== "[")){
         return false
         }; 
         // in the case of //"{[]}"  when encounter ] it will looking into the storageStr and pop out [.  now the storage array only has {   this method will solve  "{[}]"  False 
        stack.pop()
     }
 }

   // in the end  we want to prevent the case that is }}{} which 

     return !stack.length; 

};

    // for find the i first and then search substring after 
    // for (let i = 0; i < s.length; i ++){
    //     if (s[i] ==="("){
    //         for 
    //     }
    // }

    // use map()()
    // let mp = new Map()
    // let status = false

    // for (let i = 0 ; i < s.length; i++) {
    //     mp.set(s[i], i )
    // }

    // if (mp.has("(") && mp.has(")") && mp.get("(") < mp.get(")")) {
    //     status = true; 
    // }

    //  if (mp.has("[") && mp.has("]") && mp.get("[") < mp.get("]")) {
    //     status = true; 
    // }

    //  if (mp.has("{") && mp.has("}") && mp.get("{") < mp.get("}"))  {
    //     status = true; 
    // }

    // return status
    //edgecase about the {{}}
   