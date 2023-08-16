# css及相关问题

[toc]

## 1. flex布局 常用属性
> flex-direction 主轴排列方向
> flex-wrap 换行 
> justify-content 主轴对齐方式
> align-items  交叉轴对齐方式
> align-self: flex-start/center/flex-end; 元素内的某个项的对齐方式
> order 排序
> flex：1 相当于flex: 1 1 0的简写 包括三个属性 
  > * flex-grow（剩余空间分配）
  > * flex-shrink（缩放比例）
  > * flex-basis（初始值 默认0%）
  * flex-shrink 比例计算
    > 父级元素200
    > 元素1: width: 100px; flex-shrink: 2;
    > 元素2: width: 200px; flex-shrink: 3;
    > 总和 = flex-shrink权重值1 * 元素宽度1 + flex-shrink权重值2 * 元素宽度2 = 800
    > 元素1比例： flex-shrink权重值1 * 元素宽度1 / 800 = 1/4
    > 元素2比例： flex-shrink权重值2 * 元素宽度2 / 800 = 6/4
    > 实际总缩放100px，元素1占: 100 * (1/4) = 25，元素1占: 100 * (3/4) = 75

  * flex-basis 元素初始值，优先级大于width。小于min-width和max-width
  
## 2. 不定宽高元素水平垂直居中
  * flex布局；
    > display: flex; justify-content: center; align-items: center
  * translate移动
    > position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)
  * 元素可移动空间铺满 + margin: auto
    > position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0; 或者用insert: 0 简写

## 3. css盒模型 box-sizing: border-box 和 content-box
  * content-box  （padding和border不算在元素width里）
  * border-box   （padding和border算在元素width里）

## 4. z-index 子元素间的z-index值比较

## 5. 重排重绘 重排一定会重绘，重绘不一定会重排
  * 重绘是一个元素外观改变，不影响元素本身相对于浏览器文档的位置
  * 重排包括添加删除dom，元素大小位置变化，页面初始化，浏览器大小变化，叫做重排，完成重排后，要将重新构建的渲染树渲染到屏幕上，完成重绘，所以重排一定会重绘！
  * 绝对定位固定定位元素脱离文档流，自身重排，不会引起其他元素重排
  * transform 新建图层不会重排重绘

## 6. 父元素overflow:hidden，子元素定位是否隐藏？
  * 相对定位relative隐藏，fixed不隐藏，absolute要看上级父元素是否设置了定位（除了static），父元素设置了定位子元素超出隐藏。

## 7. BFC 独立作用域
  * 如何触发BFC？
    > float不为none
    > position不为relative和static（position的值为absolute或者fixed）
    > overflow为auto、scroll和hidden（overflow的值不为visible）
    > display的值为inline-block、inline-flex、flex、flow-root、table-caption、table-cell

  * BFC可以解决什么问题?
    > 解决浮动元素令父元素高度坍塌的问题，清除浮动 (overflow)
    > 文字包裹浮动元素，文字元素设置属性 (float)
    > 外边距重合问题

## 8. css 空隙和外边距问题处理
  * display: inline-block 元素底部会出现留白4px，相邻元素也会有空隙，解决方案：
    > 父元素font-size: 0
    > vertical-align属性
    > 父元素word-spacing: -5px

  * 外边距合并，上下元素margin合并问题，解决方案：
    > 包个父元素添加 overflow 或者 display

  * 外边距合并，父子元素中子元素margin-top/bottom父元素也会跟着移动，解决方案：
    > 子元素display: inline-block；
    > 父元素overflow: hidden / auto
    > 父元素display: flex / inline-block / inline-table 等
    > 父元素加padding任意值
    > 父元素border
    > 父元素position: absolute / fixed
    > 父元素浮动

## 9. 元素选择器
  * 子元素选择器，一级子类
  * \+ 相邻兄弟选择器，紧跟元素后的第一个元素
  * ~ 所有兄弟选择器，元素后的所有兄弟元素
  * [attr*='val'] 包含   匹配属性包含值 包含部分字段
  * [attr~='val'] 包含   匹配属性包含值 包含某个词
  * [attr^='val'] 以属性开头
  * [attr$='val'] 以属性结尾

## 10. 清除浮动
  * clear: both 浮动元素下加个空白div设置clear: both（其实是浮动元素的下面元素清除浮动）
  * 伪元素:after 浮动元素父级加clearfix，clear: both一种写法，浮动元素的父级加clearfix类，:after设置clear: both
  * overflow: hidden 浮动元素的父元素加overflow: hidden