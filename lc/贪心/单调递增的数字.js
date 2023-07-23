/**
 * @param {number} num
 * @description 倒序左边比右边大，左边--记录位置，被减的后面都改为9
 * @return 小于或等于num的最大数且单调递增
 */
function solution(num = 322 /* return 299 */ ) {
    const str = (num + '').split('')
    let step = str.length
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] < str[i - 1]) {
            step = i
            str[i - 1] -= 1
        }
    }
    for (let j = step; j < str.length; j++) {
        str[j] = '9'
    }
    return +str.join('')
}