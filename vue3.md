## 1.Refect

使用Reflect可以让对象中的this指向Proxy对象，调用this[key]时会触发Proxy的get

```javascript
const obj = {
    foo: 1,
    // obj 中有一个 getter属性 通过this获取foo的值
    get getFoo() {
        return this.foo
    }
}
const newP = new Proxy(obj, {
    get(target, key, receiver) {
        console.log('读取', key) // 使用Reflect，被代理的对象obj的getFoo中的this可以触发proxy的get，直接返回traget[key]无法触发proxy的get
        return Reflect.get(target, key, receiver) // 使用Reflect返回读取的属性值
    },
    set(target, key, newVal) {
        target[key] = newVal
    }
})
console.log(newP.getFoo)
```

## 2. watch

watch的effect有三个参数，第三个参数是一个回调函数，下一次的watcheffect执行时会执行上一次的回调函数

## 3. computed

computed的effect在定义时的scheduler中有lazy属性，effect函数执行时判断lazy=true不执行run，computed的理念就是只有在用到这个计算属性的时候才会执行，所以内部有_diyty属性，dirty = true才会计算，关联属性修改时会执行计算属性scheduler修改_dirty = true, 然后trigger用到计算属性的effect函数，会触发get且dirty为true开始重新计算，重置dirty为false

## 4. diff

>变量e1, e2, i**
首首比较，相同则 i++，尾尾比较相同则e1--e2--，三种情况：

* 第一种只有新增（ab,abc || ab,cab） i > e1, i <= e2，patch，i--
* 第二种只有删除（abc,ab || cab, ab ）i > e2, i <= e1，unmount i--
* 第三种中间有复用（a b [c d e k] f g  => a b [e c d h] f g），以下是第三种；

***

>变量 s1 = 2, s2 = 2, e1 = 5, e2 = 5
newIndexMap,
newIndexToOldMap = [0,0,0,0],
maxSequence

* 首先定义一个newIndexMap（newVnode索引），循环newvonde确定newvnode（cdek）的index, newIndexMap = { c: 2, d: 3, e: 4, k: 5 }
* 在定义一个newIndexToOldMap（newvnode在oldvnode的位置），循环oldvnode，通过newIndexMap查找newIndex，如果没找到说明old被删除（newIndexMap[k] = undefined），unmount节点
* 找到则确定位置新在旧的位置，newIndexToOldMap[newIndex - s1] = i + 1，（i + 1是为了避免0冲突，0代表newvnode在oldvnode中没有，初始为0），newIndexToOldMap = [5, 3, 4, 0]，求最长递增子序列maxSequence = [1, 2]

>变量j = maxSequence[maxSequence.length - 1], 
变量Sequence（倒序循环新节点长度） = e2 - s2 + 1

* 如果newIndexToOldMap[i] = 0（新节点在旧节点中未找到），则新增节点，（h新增）；i = j则节点属于子序列，不处理，j--，（d，c跳过），e不在子序列中，移动位置到c前

[vue3 diff 相关源码](./vue3相关源码/diff.js)

## 5. 组件实现原理

1. props传递与更新

> 组件中有（组件实例）instance.props和vnode.props，instance.props是组件定义的props是浅响应式数据（通知页面更新），vnode.props是组件传递的props值和定义的emit

> 没有定义到instance.props的属性会存储在instance.attrs

> 父组件更新后会递归判断子节点是否需要更新patch，执行 shouldUpdateComponent 方法判断是否需要更新子组件，内部会对比 props，值变化返回true，然后执行update更新子组件也就是组件的副作用函数去更新instance.props，同时因为是响应式数据页面更新。

2. setup(props, context)

> props返回组件接收并定义的数据，组件props没有接收定义的在attrs中
> context有 attrs、emit、slots、expose
> 1. attrs 存储没有被props显式声明的属性（包括emit）
> 2. emit 以on开头的认为是自定义事件，即使没有声明也会被添加到vnode.props中，调用emit会从props中获取handlerName去执行
> 3. slots 父组件编写子组件插槽部分的模版，在子组件渲染的时候把这部分填充到子组件中，父组件使用插槽将slots对象添加到子组件中，context get读取this.$slots时直接返回instance.slots对象
> 4. expose 子组件导出的方法

3. 注册生命周期

> 执行setup函数中调用生命周期函数，将生命周期函数内容push添加到对应的instance[key]中，组件挂载时循环执行函数

## 6. 内建组件

1. KeepAlive

> 组件定义name，可以设置include和exclude，会在全局定义一个缓存的map，下次进入组件的时候会判断是否include中缓存，判断是否在缓存map中，是缓存组件添加到map中或已在map中就直接返回。
> 组件有max上线可以设置，超出上限会被移除最久没有被访问的缓存实例。
> 没有设置include，是通过v-if判断的组件会加标识判断是否需要缓存。

2. Transtion

> 在dom加载前添加enter动画，leave动画结束后卸载dom
> 进场动画有enter-from，enter-to，enter-active，离场动画有leave-from，leave-to，leave-active
> 先添加from和active的class，利用**requestAnimationFrame**函数（上一帧加载完成，下一帧开始前，也就是from类定义的位置加载完成了），在函数里删除from，添加to，然后坚挺transition事件，移出to和active类。

## 7. 编译器

>1. 模版语法解析 Parser(template) => ast 返回模版AST
>2. 转换函数 transformer(ast)）将模版AST 转换为 JavascriptAST
>3. 代码生成 generate(ast.jsNode) 生成render
>4. 渲染函数render

>通过parse将template生成ast，通过transform转化优化ast，通过generate生成render函数 
1. Parse 解析模版，解析为模版AST
    ```javasiript
    <p>ss</p>
    ```
    1. 解析器状态：初始状态1，标签开始状态2，标签名称状态3，文本状态4，结束标签状态5，结束名称状态6，结束标签回到初始1。
    2. 扫描过程：初始1读取到 < 进入到开始2，开始2读取到 p进入名称3，名称3读取到 > 进入到文本4，文本4读取到s直到遇到 < ，回到开始2，读到 / ，进入到标签5，读到p，进入到结束名称6，读取到 > ，结束状态回到初始1。
    3. elementTrack进栈，状态结束后弹出栈，最终AST树形结构
2. transform 转换函数 对 AST 进行一些转换操作，递归调用遍历每一个节点，对每一个节点调用这些转换函数
3. generate 根据转化的AST生成 render