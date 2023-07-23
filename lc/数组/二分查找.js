// 二分查找
function binarySearch(arr, findVal) {
    //当left>right时，就没找到，结束
    // if (left > right) {
    //     return -1
    // }
    // let mid = Math.floor((left + right) / 2);
    // let midVal = arr[mid];
    // if (findVal > midVal) {
    //     //向右递归
    //     return binarySearch(arr, mid + 1, right, findVal);
    // } else if (findVal < midVal) {
    //     //向左递归
    //     return binarySearch(arr, left, mid - 1, findVal);
    // } else {
    //     return mid; 
    // }
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];
        if (findVal > midVal) {
            left = mid + 1;
        } else if (findVal < midVal) {
            right = mid - 1;
        } else {
            return mid
        }
    }
    return -1
}