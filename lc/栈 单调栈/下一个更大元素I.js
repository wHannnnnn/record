/**
 * @param nums1
 * @param nums2
 * @description 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。不存在则-1
 */
function solution(nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]) {
    const map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i)
    }
    const res = new Array(nums1.length).fill(-1)
    const stack = []
    stack[0] = 0
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            const last = stack.pop()
            const val = map.get(nums2[last])
            if (val >= 0) {
                res[val] = nums2[i]
            }
        }
        stack.push(i)
    }
    return res
}