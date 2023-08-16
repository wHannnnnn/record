function getSequence(arr) {
    debugger
    // 最长递增子序列路径, 有序递增
    const lis = [0];
    // 相当于复制一份arr数组，此数组用于稍后纠正lis用的
    const recordIndexOfI = arr.slice();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        const arrI = arr[i];
        // 如果元素值为0，证明节点是新增的，老dom上没有，肯定不需要移动，所以跳过0，不在lis里
        if (arrI !== 0) {
            // 判断arrI插入到lis哪里
            const last = lis[lis.length - 1];
            // arrI比lis最后一个元素还大，又构成最长递增
            if (arr[last] < arrI) {
                // 记录第i次的时候，本来的元素是什么，后面要做回溯的
                recordIndexOfI[i] = last;
                lis.push(i);
                continue;
            }
            // 二分查找插入元素
            let left = 0,
                right = lis.length - 1;
            while (left < right) {
                const mid = (left + right) >> 1;
                //  0 1 2 3 4 (1.5)
                if (arr[lis[mid]] < arrI) {
                    // mid< 目标元素 ， 在右边
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            if (arrI < arr[lis[left]]) {
                // 从lis中找到了比arrI大的元素里最小的那个，即arr[lis[left]]。
                // 否则则没有找到比arrI大的元素，就不需要做什么了
                if (left > 0) {
                    // 记录第i次的时候，上次的元素的是什么，便于后面回溯
                    recordIndexOfI[i] = lis[left - 1];
                }
                lis[left] = i;
            }
        }
    }
    // 遍历lis，纠正位置
    let i = lis.length;
    let last = lis[i - 1];
    while (i-- > 0) {
        lis[i] = last;
        last = recordIndexOfI[last];
    }
    return lis;
}

const findLengthOfLCIS = (nums) => {
    let dp = Array(nums.length).fill(1);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            dp[i + 1] = dp[i] + 1;
        }
    }
    return Math.max(...dp);

    // let result = 1; // 连续子序列最少也是1
    // let count = 1;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i + 1] > nums[i]) { // 连续记录
    //         count++;
    //     } else { // 不连续，count从头开始
    //         count = 1;
    //     }
    //     if (count > result) result = count;
    // }
    // return result;
}