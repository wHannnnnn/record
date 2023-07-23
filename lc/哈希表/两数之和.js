function solution(arr = [4, 2, 6, 4, 8, 5], val = 7) {
    var valMap = new Map()
    for (let i = 0; i < arr.length; i++) {
        var num = val - arr[i]
        if (!valMap.has(num)) {
            valMap.set(arr[i], i)
        } else {
            return [valMap.get(num), i]
        }
    }
}