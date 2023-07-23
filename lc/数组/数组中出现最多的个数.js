// 查找数组中出现最多的个数
function findMost(arr = [3, 4, 2, 2]) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    let res = {};
    let maxName, maxNum = 0
        // 遍历数组
    arr.forEach((item) => {
        res[item] ? res[item] += 1 : res[item] = 1
        if (res[item] > maxNum) {
            maxName = item
            maxNum = res[item]
        }
    })
    return '出现次数最多的元素为:' + maxName + ', 出现次数为:' + maxNum;
}