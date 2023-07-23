/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @description 1. 定义map，确定每个元素的数量。
 *              2. 循环map，定义数组，map的value作为索引，对应的值是map的key，生成的数组索引就是个数。
 *              3. 倒序循环数组，对应索引有值则添加到结果，结果长度小于k。
 * @returns 
 */
function solution(nums = [1, 2, 3, 4, 2, 2, 4, 5, 1], k = 3) {
    const map = new Map()
    for (const i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    const temp = []
    map.forEach((val, key) => {
        if (temp[val]) temp[val] = [...temp[val], key] // 个数作为key
        else temp[val] = [key]
    })
    const res = []
    for (let i = temp.length - 1; i > 0; i--) {
        if (res.length >= k) break
        if (temp[i]?.length) res.push(...temp[i])
    }
    return res
}