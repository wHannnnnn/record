function solution(s = 'aasaas') {
    const str = (s + s).slice(1, s.length * 2 - 1)
    return str.indexOf(s) !== -1
    // return subStr(str, s) 或者KMP方式
}