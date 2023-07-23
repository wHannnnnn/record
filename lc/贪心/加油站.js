/**
 * @param gas = [1,2,3,4,5]
 * @param cost = [3,4,5,1,2]
 * @description start开始循环，差值相加为负start到i一定不是起点，start = i + 1，最后差值的总和如果< 0一定是走不完
 * @return start || -1
 */
function solution(gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]) {
    let start = 0
    let sum = 0
    let all_sum = 0
    for (let i = 0; i < gas.length; i++) {
        const rest = gas[i] - cost[i]
        sum += rest
        if (sum < 0) {
            sum = 0
            start = i + 1
        }
        all_sum += rest
    }
    if (all_sum < 0) return -1
    return start
}