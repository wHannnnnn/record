// 数组反转
function arrReverse(arr) {
    const len = Math.floor(arr.length / 2)
    for (var i = 0; i < len; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
}
// 反转数字
function reverse(str = -123) {
    var newStr = parseInt(str.toString().split("").reverse().join(""));
    return str < 0 ? -newStr : newStr;
    // 小数
    // var arr = str.toString().split("").reverse()
    // if(arr[arr.length - 1] === '-') {
    //     arr.splice(arr.length - 1, 1)
    // }
    // return str < 0 ? -arr.join('') : arr.join('')
}

// 反转字符串II
function solution(s = 'abcdefg', k = 2) {
    const arr = s.split('')
    const reverse = (l, r) => {
        let k = Math.floor((l + r) / 2) // 循环的次数
        for (let j = l; j < k; j++, r--) {
            [arr[j], arr[r - 1]] = [arr[r - 1], arr[j]] // r - 1 长度-1对应索引
        }
    }
    for (let i = 0; i < arr.length; i += k * 2) {
        let l = i
        let r = i + k // l到r 实际是反转的长度。判断时需要-1才是对应的尾索引
        if (r <= arr.length) { // r是长度右侧的位置，所以判断是要 <= 数组的长度
            reverse(l, r)
        } else {
            reverse(l, arr.length)
        }
    }
    return arr.join('')
}