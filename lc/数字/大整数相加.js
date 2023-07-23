// 大整数相加
function dzsxj(num1 = 11234523423423, num2 = 876823847683) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    var length = Math.max(str1.length, str2.length);
    str1 = str1.padStart(length, '0');
    str2 = str2.padStart(length, '0');
    var result = '';
    var n = 0
    var y = 0; // 余数
    for (let i = length - 1; i >= 0; i--) {
        n = Number(str1[i]) + Number(str2[i]) + y;
        result = (n >= 10 ? n % 10 : n) + result;
        y = Math.floor(n / 10);
    }
    if (y > 0) result = y + result;
    return Number(result)
}