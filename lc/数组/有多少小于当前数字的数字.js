function solution(nums = [8, 1, 2, 2, 3]) {
    const arr = [...nums].sort((a, b) => a - b)
    const map = new Map()

    // 倒序循环索引对应的就是比他小的个数，相同的取最前面的
    for (let i = arr.length - 1; i >= 0; i--) {
        map.set(arr[i], i)
    }
    for (let j = 0; j < nums.length; j++) {
        arr[j] = map.get(nums[j])
    }
    return arr
}