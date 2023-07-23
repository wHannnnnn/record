// 模板匹配
function mbpp(){
    var t = '<ul><li>${name}</li><li>${age}</li></ul>'
    var data = [{"name": "小明","age": "6"}]
    t = t.replace(/\${([a-z]+)\}/g,function(e, v){    
        console.log(e, v)
        return data[0][arguments[1]]
    })
}
