/**
 * 
 * @param {string} s '  hello  world '
 * @returns 'world hello'
 */
function solution(s = '  hello  world ') {
    const arr = s.split('')

    /* 先删除多余空格 */
    let fast = 0,
        last = 0
    while (fast < arr.length) {
        if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) fast++
            else arr[last++] = arr[fast++]
    }
    arr.length = arr[last - 1] === ' ' ? last - 1 : last
    let str = ''
    let resStr = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === ' ') {
            resStr = resStr + str + ' '
            str = ''
        } else {
            str = arr[i] + str
        }
    }
    return resStr + str
}