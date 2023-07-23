function solution(board) {
    // 九宫格内不允许重复，同行同列不允许重复
    const isValidate = (row, col, k) => {
        for (let i = 0; i < board[row].length; i++) {
            if (board[row][i] === k) return false
        }
        for (let j = 0; j < board.length; j++) {
            if (board[j][col] === k) return false
        }
        // 判断当前九宫格的位置，是第几个，求3的倍数 + 3
        const row_start = Math.floor(row / 3) * 3
        const col_start = Math.floor(col / 3) * 3
        for (let i = row_start; i < row_start + 3; i++) {
            for (let j = col_start; j < col_start + 3; j++) {
                if (board[i][j] === k) return false
            }
        }
        return true
    }
    const backTracking = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') continue /* 有值则跳过 */
                    /* 原位置本来就有值不会进入下面的逻辑，原位置没有值是后来填进去的则先进入下面的填充逻辑，继续进入下一层，在下一层里跳过刚才的位置，继续判断， */
                for (let k = 1; k <= 9; k++) {
                    if (isValidate(i, j, k + '') /* 当前值是否允许填充，都不允许则返回false，继续循环k判断是否可以 */ ) {
                        board[i][j] = k + ''
                        if (backTracking()) return true /* 1. 下一个值可以填充return true，不可以填充return false，则进入下一行重置为.，重新校验k++是否允许 */
                        board[i][j] = '.'
                    }
                }
                return false // 没有可以填充的值返回false，上一层重置为.，
            }
        }
        return true // 填充的都可以返回true， 进入上一层1.
    }
    backTracking()
    return board
}