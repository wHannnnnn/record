function solution(s = '25525511135') {
    const res = []
    const backTracking = (start, temp) => {
        if (temp.length === 4 && start >= s.length) {
            res.push(temp.join('.'))
        }
        for (let i = start; i < s.length; i++) {
            if (s[i] === '0' || +s.slice(start, i + 1) > 255 || temp.length >= 4) break
            if (s.length - i > 3 * (4 - temp.length)) continue
            temp.push(s.slice(start, i + 1))
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(0, [])
    return res
}