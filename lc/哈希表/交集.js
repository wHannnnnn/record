function solution(arr1, arr2) {
    const res = new Set(),
        arr1Set = new Set(arr1)
    for (const item of arr2) {
        if (arr1Set.has(item)) {
            res.add(item)
        }
    }
    return Array.from(res)
}