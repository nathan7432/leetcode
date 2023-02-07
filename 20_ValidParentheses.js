/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {
        '{':'}',
        '[':']',
        '(':')'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
            stack.push(pairs[s[i]]) 
        else {
            if (s[i] === stack[stack.length-1])
                stack.pop()
            else 
                return false
        }
        //if it is an open
            //add to stack
        //if it is a close
            //if it is the right close
                //remove from stack
            //else
                //return false
    }
    if (stack.length === 0) return true
    return false
};
