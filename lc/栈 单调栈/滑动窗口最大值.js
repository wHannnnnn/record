/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
function solution(nums, k) {
    const res = []
    const strackArr = []
    const add = (val) => {
        while (val > strackArr[strackArr.length - 1]) {
            strackArr.pop()
        }
        strackArr.push(val)
    }
    const del = (val) => {
        if (val === strackArr[0]) strackArr.shift()
    }

    // lr对应窗口左右位置，先把k内的add，>k的循环会有删除
    let l = 0,
        r = 0
    while (r < k) {
        add(nums[r++])
    }
    res.push(strackArr[0])

    // 先添加在删除
    while (r < nums.length) {
        add(nums[r++])
        del(nums[l++]) // 删除逻辑判断 l 的值跟栈口是否相同，相同说明栈口元素在窗口外需要删除
        res.push(strackArr[0])
    }
    return res
}