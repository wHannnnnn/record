// 三数之和所有情况
function threeNum(nums = [-5, -4, -3, -2, -2, -2, -1, -1, 0, 0, 1, 1, 2, 3, 3, 4, 4, 5]) {
    nums.sort((a, b) => a - b)
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i - 1] === nums[i]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let val = nums[i] + nums[l] + nums[r];
            if (val === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if (val < 0) {
                l++
            } else {
                r--;
            }
        }
    }
    return res
}