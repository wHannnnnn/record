const decodeString = (s = '3[a2[c2[d]]2[e]]') => {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let result = '';
    for (const char of s) {
        if (Number(char) == char) {
            num = num * 10 + Number(char); // 算出倍数 *10 因为有连续数字12 321
        } else if (char == '[') { // 遇到 [
            strStack.push(result); // result串入栈
            result = ''; // 入栈后清零
            numStack.push(num); // 倍数num进入栈等待
            num = 0; // 入栈后清零
        } else if (char == ']') { // 遇到 ]，两个栈的栈顶出栈
            let repeatTimes = numStack.pop(); // 获取拷贝次数
            result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
        } else {
            result += char; // 遇到字母，追加给result串
        }
    }
    return result;
};