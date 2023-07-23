/**
 * @param bills [5,5,10,10,20]
 * @return {boolean}
 */
function solution(bills = [5, 5, 10, 10, 20]) {
    let five_num = 0
    let ten_num = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) five_num++
            else if (bills[i] === 10) {
                if (five_num === 0) return false
                five_num--
                ten_num++
            } else if (bills[i] === 20) {
            if (ten_num > 0 && five_num > 0) {
                ten_num--
                five_num--
            } else if (five_num >= 3) {
                five_num -= 3
            } else {
                return false
            }
        }
    }
    return true
}