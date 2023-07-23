// 相邻元素相同删除
function aa(str = 'abbac') {
    var temp = [str[0]];
    var tempIndex = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== temp[tempIndex]) {
            temp[++tempIndex] = str[i];
        } else {
            tempIndex--
        }
    }
    /* tempIndex记录的是索引，slice截取索引需要+1 */
    return temp.slice(0, tempIndex + 1).join('')
}