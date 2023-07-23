// 数字千分位
function szqfw(num = 13231312837646354) {
    var str = num.toString();
    var result = '';
    var i = str.length - 1
    var index = 0
    while (i >= 0) {
        result = index % 3 === 0 && index !== 0 ? str[i] + ',' + result : str[i] + result
        i--;
        index++;
    }
    return result
}