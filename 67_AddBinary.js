/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let pa = a.length - 1
    let pb = b.length - 1
    let carry = 0
    let result = ''
    while (pa >= 0 || pb >= 0) {
        let sum = carry
        if (pa >= 0)
            sum += Number(a[pa])
        if (pb >= 0)
            sum += Number(b[pb])
        result += (sum % 2)
        carry = Math.floor(sum / 2)
        pa--
        pb--
    }
    if (carry === 1)
        result += carry
    return result.split('').reverse().join('')
};
