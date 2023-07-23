// 斐波那契数列
var fbnq = function() {
    var temp = [0, 1];

    function cc(num) {
        if (temp[num] === undefined) {
            temp[num] = cc(num - 1) + cc(num - 2)
        }
        return temp[num]
    }
    return cc
}

function cc(num) {
    let temp = [1, 1]
        // let sum
    for (let i = 2; i < num; i++) {
        // sum = temp[0] + temp[1]
        // temp[0] = temp[1]
        // temp[1] = sum
        [temp[0], temp[1]] = [temp[1], temp[0] + temp[[1]]]
    }
    return temp[1]
}