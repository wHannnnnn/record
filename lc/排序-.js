// 冒泡排序 外层循环比较的轮数（数组总长度 - 1），内层循环每轮要比较的数据个数（未排序的数组长度），外层每循环一次确定一个最大值，内层循环的长度-1
function popSort(arr) {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]]
            }
        }
    }
    return newArr;
}
// 快速排序（慢）
function sort(arr) {
    //如果数组<=1,则直接返回
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    //基准值
    var pivot = arr[pivotIndex];
    //定义左右数组
    var left = [];
    var right = [];
    //比基准小的放在left，比基准大的放在right
    for (let i = 0; i < arr.length; i++) {
        if (i == pivotIndex) continue
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //递归
    return [...sort(left), ...[pivot], ...sort(right)];
}
// 快速排序（快）
function sort2(arr, left, right){
    if (left >= right) {
        return
    }
    let key = arr[left];
    let start = left;
    let end = right;
    while(left < right) {
        while(arr[right] > key && left < right) right--; // 大于key一直执行 直到找到比key小的
        if(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        while(arr[left] < key && left < right) left++;
        if(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
    sort2(arr, start, left - 1);
    sort2(arr, left + 1, end);
    return arr;
}
// 选择排序  双循环 外层循环轮数，定义个最小值，内层循环 + 1要比较的数据，找到最小值跟外层索引数值换位置
function sort4(arr) {
    varlen = arr.length;
    varminIndex, temp;
    for(let i = 0; i < len - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {    // 寻找最小的数
                minIndex = j;                // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    returnarr;
} 
// 插入排序  双循环 外层循环轮数 内层倒循环索引 - 1 的数据，左边比右边大则一直循环换位置，外层循环每循环一次当前索引前的数字都是大小排列好的；
function sort3(arr = []) {
    if (!Array.isArray(arr) || arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]}
            else break;
        }
    }
    return arr;
} 
    