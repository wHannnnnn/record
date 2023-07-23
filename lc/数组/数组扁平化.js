// 数组扁平化 带deep
function flat(arr, deep) {
    let index = 0;

    function fn1(arr, deep) {
        var result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && index < deep) {
                index++;
                result = result.concat(fn1(arr[i], deep))
            } else {
                result.push(arr[i])
            }
        }
        return result
    }
    return fn1(arr, deep);
}