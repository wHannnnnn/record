function solution(n = 4) {
    const res = []
    const temp = new Array(n).fill('.').map(() => new Array(n).fill('.'))
    const isValidate = (row, col) => {
        // 1. 判断当前列没有：当前row以上是否有， 起点为i = row - 1， i >= 0， i--
        for (let i = row - 1; i >= 0; i--) {
            if (temp[i][col] === 'Q') return false
        }
        // 2. 判断左上是否有：起点为i = row - 1；j = col - 1； i-- j--
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (temp[i][j] === 'Q') return false
        }
        // 3. 判断右上是否有：起点为i = row - 1；j = col + 1；i-- j++
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (temp[i][j] === 'Q') return false
        }
        return true
    }
    const backTracking = (row) => {
        if (row >= n) {
            const push_temp = []
            for (const item of temp) {
                push_temp.push(item.join(''))
            }
            res.push(push_temp)
            return
        }
        for (let j = 0; j < n; j++) {
            if (isValidate(row, j)) {
                temp[row][j] = 'Q'
                backTracking(row + 1)
                temp[row][j] = '.'
            }
        }
    }
    backTracking(0)
    return res
}

/**
 * II
 * @param {number} n 
 * @returns count 共有多少种解法
 */
function solution(n = 4) {
    let count = 0
    const temp = new Array(n).fill('.').map(() => new Array(n).fill('.'))
    const isValidate = (row, col) => {
        // 1. 判断当前列没有：当前row以上是否有， 起点为i = row - 1， i >= 0， i--
        for (let i = row - 1; i >= 0; i--) {
            if (temp[i][col] === 'Q') return false
        }
        // 2. 判断左上是否有：起点为i = row - 1；j = col - 1； i-- j--
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (temp[i][j] === 'Q') return false
        }
        // 3. 判断右上是否有：起点为i = row - 1；j = col + 1；i-- j++
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (temp[i][j] === 'Q') return false
        }
        return true
    }
    const backTracking = (row) => {
        if (row >= n) {
            count++
            return
        }
        for (let j = 0; j < n; j++) {
            if (isValidate(row, j)) {
                temp[row][j] = 'Q'
                backTracking(row + 1)
                temp[row][j] = '.'
            }
        }
    }
    backTracking(0)
    return count
}