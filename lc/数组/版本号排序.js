// 版本号
function bbh(arr = ['4.1.2', '1.2', '1.2.1', '2.1', '3.1','3.2','3.1.2']){
    return arr.sort((a,b)=>{
        let a1 = a.split('.');
        let b1 = b.split('.')
        let i = 0;
        while(true){
            let a11 = a1[i]
            let b11 = b1[i++]
            if(a11 === b11) continue
            if(a11 === undefined || b11 === undefined) {
                return b1.length - a1.length
            }
            return b11 - a11
        }
    })
}