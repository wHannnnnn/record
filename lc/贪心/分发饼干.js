/**
 * @param s 食量
 * @param t 饼干
 * @description 每人一块，排序后从后往前，先将最大的饼干给最合适的人，饼干指针-1
 */
function solution(s = [1, 2, 4], t = [1, 3, 5]) {
    const s_arr = s.sort((a, b) => a - b)
    const t_arr = t.sort((a, b) => a - b)
    let res = 0
    let t_index = t.length - 1
    for (let i = s_arr.length; i >= 0; i--) {
        if (t_arr[t_index] >= s_arr[i]) {
            res += 1
            t_index--
        }
    }
    return res
}