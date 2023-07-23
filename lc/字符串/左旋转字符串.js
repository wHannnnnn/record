/**
 * 
 * @param {string} s 
 * @param {number} k 
 * @returns 输入 abcdefg，输出cdefgab
 */
function solution(s = 'abcdefg', k = 2) {
    const arr = s.split('')
    const reverse = (l, r) => {
        for (; l < r; l++, r--) {
            [arr[l], arr[r - 1]] = [arr[r - 1], arr[l]]
        }
    }
    reverse(0, k)
    reverse(k, arr.length)
    reverse(0, arr.length)
    return arr.join('')
}