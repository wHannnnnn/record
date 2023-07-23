/**
 * @param {*} haystack 
 * @param {*} needle 
 * @description 字符串 haystack 的长度为 n，字符串 needle 的长度为 m，O(m + n)
 * @returns 
 */
function subStr(haystack = "aabaacaabaaf", needle = "aabaaf") {
    const getNext = () => {
        // 前后缀匹配 next 默认 -1
        let l = -1 // 后缀索引
        const next = new Array(needle.length)
        next[0] = l
        for (let i = 1; i < needle.length; i++) {
            // 前后缀不相同 后缀索引回退
            while (l >= 0 /* 小于0下面赋值错误 */ && needle[i] !== needle[l + 1]) {
                l = next[l]
            }
            // 前后缀相同
            if (needle[i] === needle[l + 1]) l++
                next[i] = (l)
        }
        return next
    }
    const next = getNext()
    let j = -1 // needle已匹配的位置
    for (let i = 0; i < haystack.length; i++) {
        while (j >= 0 /* 小于0下面赋值错误 */ && haystack[i] !== needle[j + 1]) {
            j = next[j]
        }
        if (haystack[i] === needle[j + 1]) j++
        if (j === needle.length - 1) return i - needle.length + 1 /* haystack的位置 - needle的长度 需要+1 是匹配的起点位置 */
    }
    return -1
}