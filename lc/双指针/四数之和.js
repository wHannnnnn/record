function solution(nums = [], target = 10) {
    nums.sort((a, b) => a - b)
    let res = [];
    for (let k = 0; k < nums.length - 3; k++) {
        if (k > 0 && nums[k - 1] === nums[k]) continue;
        for (let i = k + 1; i < nums.length - 2; i++) {
            if (i > k + 1 && nums[i - 1] === nums[i]) continue;
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                let val = nums[k] + nums[i] + nums[l] + nums[r];
                if (val === target) {
                    res.push([nums[k], nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (val < target) {
                    l++
                } else {
                    r--;
                }
            }
        }
    }
    return res
}