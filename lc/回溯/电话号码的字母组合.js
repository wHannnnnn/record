/**
 * 
 * @param {string} digits '233'
 * @returns 
 */
function solution(digits) {
    if (!digits.length) return []
    const map = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const res = []
    const backTracking = (index /* index号码的索引 */ , temp) => {
        if (temp.length >= digits.length) {
            res.push(temp)
            return
        }
        for (let i = 0; i < map[digits[index]].length; i++) {
            temp += map[digits[index]][i]
            backTracking(index + 1, temp)
            temp = temp.slice(0, temp.length - 1)
        }
    }
    backTracking(0, [])
    return res
}