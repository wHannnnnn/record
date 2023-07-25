/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns 
 */
function solution(s = 'assd', t = 'aasssdd') {
    let i = 0,
        j = 0
    while (i < s.length && j < t.length) {
        if (s[i] !== t[j]) return false
        i++
        j++
        // s[i] 是否等于 s[i-1]，不等于则t后面的值是连续输入的，让t++直到下一个不相等的值，进行下一轮s[i] !== t[j]比较
        if (i === s.length || j < t.length && s[i] !== s[i - 1]) {
            while (j < t.length && t[j - 1] === t[j]) {
                j++
            }
        }
    }
    return i === s.length && j === t.length
}