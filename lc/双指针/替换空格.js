function solution(str = 'we are gg。') {
    const res = []
    let resLen = str.length
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') resLen += 2
    }
    for (let r = resLen - 1, l = str.length - 1; l >= 0; r--, l--) {
        if (str[l] === ' ') {
            res[r] = '0'
            res[--r] = '2'
            res[--r] = '%'
        } else {
            res[r] = str[l]
        }
    }
    return res.join('')
}