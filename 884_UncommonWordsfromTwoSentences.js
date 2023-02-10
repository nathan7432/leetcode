/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const o = {}
    s1.concat(' ', s2).split(' ').forEach( w => {
        if (!o[w])
            o[w] = 1
        else
            o[w]++ 
    })
    return Object.keys(o).filter( w => o[w] === 1)
};
