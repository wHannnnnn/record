/**
 * @param {string} s 
 * @description 不符合的分支不需要再分，直接continue
 * @returns 
 */
function solution(s = 'aabb') {
    const res = []
    const isPalindrome = (start, end) => {
        for (let i = start; i < end; i++) {
            if (s[i] !== s[end]) return
            end--
        }
        return true
    }
    const backTracking = (start, temp) => {
        if (start >= s.length) {
            res.push([...temp])
            return
        }
        for (let i = start; i < s.length; i++) {
            if (!isPalindrome(start, i)) continue
            temp.push(s.slice(start, i + 1))
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(0, [])
    return res
}