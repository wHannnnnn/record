function solution(n) {
    const res = new Set()
    const getNum = (val) => {
        let arr = val.toString().split('')
        return arr.reduce((total, num) => {
            return total + num * num
        }, 0)
    }
    while (n !== 1 && !res.has(n)) {
        res.add(n)
        n = getNum(n)
    }
    return n === 1
}