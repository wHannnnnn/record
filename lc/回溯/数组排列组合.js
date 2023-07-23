function plzh(arr = [
    [1, 2, 3],
    ['a', 'b']
]) {
    let index = 0;
    let res = []
    let result = []

    function fn(arr, index) {
        for (let i = 0; i < arr[index].length; i++) {
            result[index] = arr[index][i];
            if (index === arr.length - 1) {
                res.push(result.join(''))
            } else {
                fn(arr, index + 1)
            }
        }
    }
    fn(arr, index)
    return res
}