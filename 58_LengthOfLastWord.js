/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end;
  for (let i = s.length-1; i >= 0; i--) {
    if (s[i] !== ' ' && !end)
      end = i
    if (s[i] === ' ' && end)
      return end - i
  }
  return end + 1
};
