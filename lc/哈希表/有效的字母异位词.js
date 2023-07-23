// 输入: s = "anagram", t = "nagaram" 输出: true
function solution(s, t) {
    if (s.length !== t.length) return false
    let char_count = new Map();
    for (let item of s) {
        char_count.set(item, (char_count.get(item) || 0) + 1);
    }
    for (let item of t) {
        if (!char_count.get(item)) return false;
        char_count.set(item, char_count.get(item) - 1);
    }
    return true
}