function solution(s = 'badc', t = 'bcba') {
    const sMap = new Map()
    const tMap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!sMap.get(s[i])) sMap.set(s[i], t[i])
        if (!tMap.get(t[i])) tMap.set(t[i], s[i])
        if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]) return false
    }
    return true
}