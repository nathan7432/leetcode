/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let p1 = 0
    let p2 = 1
    const value = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0
    while (p2 < s.length) {
        if (value[s[p2]] > value[s[p1]]) {
            result += (value[s[p2]] - value[s[p1]])
            p1 += 2
            p2 += 2
        } else {
            result += value[s[p1]]
            p1++
            p2++
        }
    }
    if (p1 === s.length - 1)
        result += value[s[p1]]
    return result
};
