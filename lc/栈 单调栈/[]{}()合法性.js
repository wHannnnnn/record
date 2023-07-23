// 判断{}[]()合法性
// function hfx(str = '{[()]}({[[]]})'){
//     var map = new Map([['{', '}'],['(', ')'],['[', ']']]);
//     map.set('11',33)
//     var temp = [];
//     var tempIndex = -1;
//     for (let i = 0; i < str.length; i++) {
//         if(map.has(str[i])) {
//             // tempIndex++
//             temp[++tempIndex] = str[i];
//         } else {
//             map.get(temp[tempIndex]) === str[i] ? tempIndex-- : temp[++tempIndex] = str[i];
//         }
//     }
//     return !temp.slice(0, tempIndex + 1).length;
// }
function hfx(str = '{[()]}({[[]]})') {
    var map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ]);
    map.set('11', 33)
    var temp = [];
    var tempIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            // tempIndex++
            temp[++tempIndex] = str[i];
        } else {
            if (map.get(temp[tempIndex]) === str[i]) {
                tempIndex--
            } else {
                // temp[++tempIndex] = str[i]
                return false
            }
        }
    }
    return index === -1
}