// h函数柯里化
function currySum(...args){
    function fn(...nextArgs){
        return currySum(...args,...nextArgs);
    }
    fn.valueOf = function(){
        return args.reduce((a,b)=>a+b, 0);//在valueOf中计算最后结果
    }
    return fn;
}
console.log(currySum(1,2,3)(4)(5).valueOf());//15