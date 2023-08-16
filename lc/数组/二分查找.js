// 二分查找
function binarySearch(arr, findVal) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (findVal > arr[mid]) {
            left = mid + 1;
        } else if (findVal < arr[mid]) {
            right = mid - 1;
        } else {
            return mid
        }
    }
    return -1
}
const findLIndex = () => {
    let l = 0,
        r = nums.length - 1,
        v = -1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] >= target) { // 大于等于目标值，继续查找中间值左侧
            if (nums[mid] === target) v = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return v
}
const findRIndex = () => {
    let l = 0,
        r = nums.length - 1,
        v = -1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] <= target) { // 小于等于目标值，继续查找中间值右侧，, 值一定大于等于0
            if (nums[mid] === target) v = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return v
}