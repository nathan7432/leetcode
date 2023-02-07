/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    const a = x.toString().split('') 
    let p1 = 0
    let p2 = a.length - 1
    while (a[p1] === a[p2]) {
        p1 = p1 + 1
        p2 = p2 - 1
        if (p1 === p2 || p1 > p2) return true
    }
    return false
};
