/**
 * 
 * @param {*} n 
 * @description 左闭右开，右开 offset默认为1，边遍历的长度 = n - offset，每轮缩一个 offset + 1，下左边界根据start位置确定（> start），start每轮加1
 * @returns 
 */
function solution(n = 4) {
    let loop = Math.floor(n / 2)
    let start = 0
    let offset = 1
    let val = 1
    let i, j
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    while (loop--) {
        i = start
        j = start
        for (; j < n - offset; j++) {
            res[i][j] = val++
        }
        for (; i < n - offset; i++) {
            res[i][j] = val++
        }
        for (; j > start; j--) {
            res[i][j] = val++
        }
        for (; i > start; i--) {
            res[i][j] = val++
        }
        start++
        offset++
    }
    if (n % 2 > 0) {
        res[start][start] = val
    }
    return res
}

function solution(arr = []) {
    let start = 0
    let offset = 1
    let n_i = arr.length
    let n_j = arr[0].length
    let n = Math.min(n_i, n_j)
    let loop = Math.floor(n / 2)
    let index = 0
    let i, j
    const res = new Array(n_i * n_j).fill(0)
    while (loop--) {
        i = start
        j = start
        for (; j < n_j - offset; j++) {
            res[index++] = arr[i][j]
        }
        for (; i < n_i - offset; i++) {
            res[index++] = arr[i][j]
        }
        for (; j > start; j--) {
            res[index++] = arr[i][j]
        }
        for (; i > start; i--) {
            res[index++] = arr[i][j]
        }
        start++
        offset++
    }
    if (n % 2 > 0) {
        i = start
        j = start
        if (n_i === n) {
            for (; j < n_j - offset + 1 /* +1是因为上面执行完++了，实际上缩边数要少一层 */ ; j++) res[index++] = arr[i][j]
        } else {
            for (; i < n_i - offset + 1; i++) res[index++] = arr[i][j]
        }
    }
    return res
}

var spiralOrder = function(arr) {
    if (arr.length == 0) return []
    const res = []
    let top = 0,
        bottom = arr.length - 1,
        left = 0,
        right = arr[0].length - 1
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) res.push(arr[top][i])
        top++
        for (let i = top; i <= bottom; i++) res.push(arr[i][right])
        right--
        if (top > bottom || left > right) break
        for (let i = right; i >= left; i--) res.push(arr[bottom][i])
        bottom--
        for (let i = bottom; i >= top; i--) res.push(arr[i][left])
        left++
    }
    return res
};