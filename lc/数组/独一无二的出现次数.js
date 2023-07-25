function solution(nums = [1, 2, 2, 1, 1, 3]) {
    let map = new Map();
    arr.forEach(x => {
            map.set(x, (map.get(x) || 0) + 1);
        })
        // Set() 里的元素是不重复的。如果有元素出现次数相同，则最后的set的长度不等于map的长度
    return map.size === new Set(map.values()).size
}