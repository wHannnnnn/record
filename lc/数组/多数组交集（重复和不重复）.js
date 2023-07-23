// 多数组交集（重复和不重复）
const intersectRepeat = arr => {
    const result = []
    const tempArr = []
    arr.forEach(item => {
        const obj = {}
        item.forEach(j => {
            if (obj.hasOwnProperty(j)) {
                obj[j] += 1
            } else {
                obj[j] = 1
            }
        })
        tempArr.push(obj)
    })
    let minobj = tempArr[0]
    tempArr.forEach(item => {
        if (Object.keys(item).length < Object.keys(minobj).length) {
            minobj = item
        }
    })
    const newOjb = {}
    Object.keys(minobj).forEach(item => {
        newOjb[item] = Math.min(minobj[item], ...tempArr.map(function(e) { return e[item] || 0 }))
    })
    Object.keys(newOjb).forEach(item => {
        if (newOjb[item]) {
            for (let i = 0; i < newOjb[item]; i++) {
                result.push(Number(item))
            }
        }
    })
    return result
}
const intersectNoRepeatTwice = arrs => {
    return arrs.reduce(function(prev, cur) {
        console.log(prev, cur)
        return [...new Set(prev.filter((item) => cur.includes(item)))]
    })
}