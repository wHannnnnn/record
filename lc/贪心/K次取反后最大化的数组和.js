/**
 * @name K次取反后最大化的数组和
 * @param nums [2,-3,-1,5,-4]
 * @param k 2
 * @description 第一次贪心以最小的负数开始取反，第二次贪心将剩余的k次数给nums的最小值取反
 */
function solution(nums = [2, -3, -1, 5, -4], k = 6) {
    const arr = nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && k > 0) {
            arr[i] = arr[i] * -1
            k--
        }
        sum += arr[i]
    }
    // k有剩余或为0说明arr中的负数都被取反过。k % 2 !== 0 说明k用完剩余奇数，0和偶数不用处理，
    if (k % 2 !== 0) sum -= arr[arr.length - 1] * 2 // 之前加过一次，需要*2
    return sum
}