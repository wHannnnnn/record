function solution(tokens) {
    const res = []
    for (const token of tokens) {
        const val = Number(token)
        if (!isNaN(val)) {
            res.push(val)
        } else {
            const r = res.pop()
            const l = res.pop()
            switch (token) {
                case '+':
                    res.push(l + r)
                    break
                case '-':
                    res.push(l - r)
                    break
                case '*':
                    res.push(l * r)
                    break
                case '/':
                    res.push(l / r)
                    break
            }
        }
    }
    return res[0]
}