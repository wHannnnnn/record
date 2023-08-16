function concatArray(arr1 = [1, 2, 3, 4], m = 4, arr2 = [2, 3, 4, 5], n = 3) {
    let m1 = m - 1,
        n1 = n - 1;
    let index = m + n - 1;
    arr1.length = index;
    var cur;
    while (m1 >= 0 || n1 >= 0) {
        if (m1 === -1) {
            cur = arr2[n1--];
        } else if (n1 === -1) {
            cur = arr1[m1--];
        } else if (arr1[m1] <= arr2[n1]) {
            cur = arr2[n1--];
        } else {
            cur = arr1[m1--];
        }
        arr1[index--] = cur;
    }
    return arr1
}