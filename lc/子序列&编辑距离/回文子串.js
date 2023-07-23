/**
 * @param str
 * @description 判断有多少个回文子串，双指针ij作为中心点，对应的字符相同（str[i]=== str[j] => abba）则num + 1，以中心点向外移动，
 * @description 指针位置两种，i和i i+1，abba => [[a,ab], [b,bb], [b,ba], [a]]作为指针中心
 */
function solution(str = 'abba') {
    let res = 0
    for (let i = 0; i < str.length; i++) {
        res += getNum(i, i, str)
        res += getNum(i, i + 1, str)
    }
    return res
}

function getNum(i, j, str) {
    let num = 0
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i--
        j++
        num++
    }
    return num
}