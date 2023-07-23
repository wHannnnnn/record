/**
 * @param points [[1,2], [2,3], [3,4], [1,3]]
 * @description 删除多少个没有重叠。定义右边界，有重叠+1
 */
function solution(points = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]) {
    points.sort((a, b) => a[0] - b[0])
    let res = 0
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] < points[i - 1][1]) {
            res++
            points[i][1] = Math.min(points[i - 1][1], points[i][1])
        }
    }
    return res
        // points.sort((a, b) => a[0] - b[0])
        // let res = 0
        // let right = points[0][1]
        // for (let i = 1; i < points.length; i++) {
        //     if (points[i][0] < right) {
        //         res++
        //         right = Math.min(right, points[i][1])
        //     } else {
        //         right = points[i][1]
        //     }
        // }
        // return res
}