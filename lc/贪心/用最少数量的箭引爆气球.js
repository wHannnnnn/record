/**
 * @param points  [[10,16],[2,8],[1,6],[7,12]]
 * @description 先按左节点从小到大排序，定义右边界，如果当前的左节点<=右边界说明重合，min右边界，否则res++，重定义右边界
 */
function solution(points = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
]) {
    points.sort((a, b) => a[0] - b[0])
    let res = 1
    let right = points[0][1]
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= right) {
            right = Math.min(points[i][1], right)
        } else {
            res++
            right = points[i][1]
        }
    }
}