# js及相关问题
[toc]
## 1. 闭包
  * 声明在一个函数中的函数，叫做闭包函数。
  * 内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。
  * 让函数外部访问函数内部变量成为可能，局部变量会常驻在内存中，可以避免使用全局变量，防止全局变量污染；
  * 闭包是在函数外部访问函数内部的变量，防止全局变量溢出
  * 每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址。
  * 会造成内存泄漏（有一块内存空间被长期占用，而不被释放）
  * 创建闭包的变量=null，或者重新创建闭包会销毁上一个闭包（变量不被引用会被回收）

  ```javascript
    function fn() {
      var bb = 'aaa'
      return bb;
    }
    var aa = fn();
    console.log(aa, window.bb) // aaa undefined，内部变量return出来
    // 功能：输入框输入字段需要接口校验 将错误的值缓存起来 减少接口的调用
    var bibao = (function fn1(val) {
        var arr = []
        return {
            fn1: function(val) {
                if (arr.indexOf(val) == -1) {
                    arr.push(val)
                }
                return arr
            }
        }
    })()
    var a1 = bibao.fn1('1')
    a1 = bibao.fn1('2') // 销毁第一个
    bibao = null // 销毁闭包
  ```

## 2. this
  * 1. 普通函数中，指向window
  ```javascript
    function fn() {
      this.name = 'as';
      console.log(this, '普通函数') // window
    }
    fn();
    console.log(window.name)
  ```

  * 2. 构造函数中this指向调用函数的实例（谁调用就指向谁）
  ```javascript
    function fn1(name) {
      console.log(arguments[0]);
      this.name = name;
      console.log(this, '构造函数') // aa
    }
    var aa = new fn1('as');
    console.log(aa);
  ```

  * 3. 箭头没有this和arguments，调用的是上级函数作用域this指向，没有就是window
    > arguments是类数组，只有索引和长度

  * 4. 对象中的函数和箭头函数看调用情况
    ```javascript
      var obj = {
          name: 'wangwang',
          fn: function() {
              console.log(this) // obj
          },
          fn1: () => {
              console.log(this) // window
              return function() {
                  console.log(this) // window
              }
          },
          fn2: function() {
              var fn = function() {
                  console.log(this) // window
              }
              fn()
          },
          fn3: function() {
              return () => {
                  console.log(this) // obj
              }
          }
      }
      obj.fn() // 直接调用指向对象
      obj.fn1()() // 没有上及作用域 指向window
      var objfn = obj.fn
      objfn() // 直接等于函数 指向window
      obj.fn2() // 函数指向widnow
      obj.fn3()() // 上级作用域fn3函数指向对象
    ```

## 3. 词法作用域
  > 函数内访问变量时,查找变量是从函数声明的位置向外层作用域中查找,而不是从调用函数的位置开始向上查找。
  ```javascript
    var x = 10;
    function fn() {
        console.log(this, x);
    }
    function show(fn) {
        var x = 20;
        function fn1() {
            console.log(this.x, x); // 10  20
        }
        fn1()
        fn() // 10
    }
    new show(fn);
  ```

## 4. http相关
  1. http协议
      > 超文本传输协议 浏览器发送请求服务端接收请求返回数据的过程；

  2. http完整请求流程
      > 1. 浏览器解析域名
      > 2. TCP三次握手
      > 3. 建立TCP连接后，客户端可以发送http请求
      > 4. 服务器响应请求传数据，浏览器获取html文件
      > 5. 浏览器解析html文件，构建DOM树，解析css，构建cssom树，构建渲染树（还未显示在页面，需要先布局），布局渲染树，绘制渲染树。
      > 6. 四次挥手，TCP连接结束

  3. 三次握手 (SYN ACK)
      > 客户端发送SYN数据包到服务端，服务端接收SYN并将SYN和ACK数据包发送到客户端，客户端接收后将ACK数据包发送到服务端，确保连接成功
      * 第一次连接 服务端：客户端发送成功，自己接收成功；
      * 第二次连接 客户端：自己发送成功，接收成功，服务端发送成功，接收成功；  服务端：自己接收成功，客户端发送成功；
      * 第三次连接 服务端：客户端发送成功，接收成功，自己发送成功，接收成功；  客户端：自己发送成功，接收成功，服务端发送成功，接收成功。

  4. 四次挥手 (ACK FIN)
     * 客户端发送FIN ACK数据包到服务端，通知服务端将要关闭连接，客户端进入FIN_WAIT状态，此时可以接收数据但是不能发送服务；
     * 服务端接收FIN数据包并将ACK包发送到客户端，（知道需要断开连接）进入CLOSE_WAIT状态，此时无法读取数据但是可以向客户端发送数据；客户端接收了ACK包进入FIN_wait2状态（等待服务端发送FIN包）
     * 服务端将FIN包发送给客户端，进入LAST_ACK状态（此时无法发送也无法读取数据），等待客户端发送ACK包；
     * 客户端接收FIN包，发送ACK包，进入TIME_WAIT状态，最后等待服务端接收ACK包变为CLOSED状态，结束连接。

  5. http1.0，http1.1，http2.0区别
     * 1.0 每次请求都要建立一次TCP链接，浪费资源
     * 1.1 Connection: keep-alive，串行单线程，后面的请求需要等待前面的请求完，会阻塞请求
     * 1.1 同一个TCP 可以发送多个请求， 可以有多个TCP链接， chrome限制6个 ， 但是同一个TCP 中的多个请求按顺序串行处理， 会队头阻塞
     * 2.0 多路复用，多个请求在一个TCP链接上完成，每个请求都有唯一标识，即使比较耗时也不会影响到后面的请求，
     * 2.0 加了双工模式，服务器可以同时处理多个请求了。 加入多路复用，同域名上的所有通信都在单个连接上完成，单个连接可以并行的进行请求和相应
     * 2.0 以帧为最小数据单位，每个帧都会有标识自己属于哪个流，多个帧组成一个流.
     * 2.0 多路复用，其实就是一个 TCP 里存在多条流
     * 3.0  wifi断了，不需要重新建立连接

## 5. script defer和async
  > defer属性执行到script标签时会立即下载，下载的过程中页面不会停止解析，页面解析完成后执行；
  > async属性执行到script标签时会立即下载，下载的过程中页面也会解析，但是下载完会立即执行，页面停止解析

## 6. 原理实现 new、call、apply、bind、instance、reduce
  1. new
  > 注意项：原型、this、返回值是否为对象
  ```javascript
    function new(fn, ...args) {
      var obj = Object.create(fn.prototype);
      let result = fn.apply(obj, args)
      return typeof result === 'object' ? result : obj;
    }
  ```

  2. call apply
  > 注意项：对象中函数的this指向该对象
  ```javascript
    Function.prototype.call = function(context, ...args) {
      context = context || window
      context.fn = this // 这里的this代表函数
      var result = context.fn(...args) // 给context添加属性fn，所以执行fn方法时，this指向context
      delete context.fn
      return result
    }
    Function.prototype.apply = function(context, arr) {
      context = context || window
      context.fn = this
      var result = context.fn(...arr)
      delete context.fn
      return result
    }
  ```
  
  3. bind
  > 注意项：返回的函数可能使用new
  ```javascript
    Function.prototype.bind = function(obj, ...args) {
      var fn = this;
      var bound = function(...args1) {
          //通过constructor判断调用方式，为true this指向实例，否则为obj
          console.log(this.constructor === fn)
          fn.apply(this.constructor === fn ? this : obj, args.concat(args1));
      };
      var f = Object.create(fn.prototype);
      bound.prototype = f;
      return bound;
    }
  ```

  4. instance 用于检测构造函数（r.prototype）的 prototype 属性是否出现在某个实例对象（l.__proto__）的原型链上（判断l是否是r的实例）
  ```javascript
    function instance(l, r) {
      var newL = l.__proto__;
      var newR = r.prototype;
      while (true) {
          if (newL === null) return false;
          if (newL === newR) return true;
          newL = newL.__proto__;
      }
    }
  ```

  5. reduce
  > 注意项：第二个参数不传默认为数组的第一个
  ```javascript
    Array.prototype.reduce = function(fn, initVal) {
      let pre = initVal ? initVal : this[0];
      for (let i = initVal ? 0 : 1; i < this.length; i++) {
          pre = fn(pre, this[i], i, this);
      }
      return pre;
    }
  ```

## 7. 防抖节流
  1. 防抖
  > 多次执行并且执行的间隔时间小于设定时间，只执行一次。（输入框验证 滚动事件监听）
  * 非立即执行：设置延迟时间再执行函数，如果这段时间内又触发了这个函数，则清除倒计时重新计算（最后一次） 
  * 立即执行：立即执行函数 多次执行只有间隔间隔超过设置时间才执行函数 间隔时间小于设置时间内又触发了这个函数，则清除倒计时重新计算（执行第一次）
  2. 节流
  >  在一个时间范围内，多次触发只能生效一次函数。（连续滚动事件监听）
  ```javascript
      var obj = {
        timer: null,
        // 防抖
        fn: function () {
            this.timer && clearTimeout(this.timer)
            // 重新计算
            this.timer = setTimeout(() => {
                console.log('asd')
                this.timer = null
            }, 1000)
        },
        fn1: function () {
            if (!this.timer) {
                console.log('asd')
            }
            this.timer && clearTimeout(this.timer)
            // 重新计算    
            this.timer = setTimeout(() => {
                this.timer = null // 间隔超过设定时间 timer=null 上面的才能执行
            }, 1000)
        },
        // 节流
        preTime: 0,
        fn2: function () {
            // if (this.timer) {
            //     return false
            // }
            // this.timer = setTimeout(() => {
            //     this.timer = null
            //     console.log('asd')
            // }, 1000)
            // 立即执行
            if (Date.now() - this.preTime > 1000) {
                console.log('asd')
                this.preTime = Date.now()
            }
        }
    }
  ```

## 8. 浏览器缓存、垃圾回收
  1. 强制缓存、协商缓存
  > * 强制缓存优先级大于协商缓存，强制缓存设置no-cache浏览器会发请求协商缓存，设置no-store不走缓存；
  > * 强制缓存的from disk cache 和 from memory cache？ 首次进入200，普通刷新再次进入disk cache（硬盘）或者 memory cache（内存），强制深度刷新重新请求资源；
  > * Etag 和 If-None-Match  Etag服务端返回的code，下次请求放在请求头If-None-Match中，服务端比较；
  > * If-Modified-Since与Last-Modified Last-Modified最后修改时间和Etag同理，判断是否相同；
  > * 使用If-Modified-Since 和 Last-Modified的缺点：Last-Modified 过期时间只能精确到秒。如果在同一秒既修改了文件又获取文件，客户端是获取不到最新文件的。

  2. 浏览器垃圾回收机制
  * 全局变量不会被回收。
  * 局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
  * 只要被另外一个作用域所引用就不会被回收（闭包）
  * 局部变量被使用（闭包）下次闭包重定义回收上一个闭包或者创建闭包的变量=null
  * 对象没有被其他变量引用，对象会被回收

  3. 垃圾回收机制的策略有两种：引用计数法和标记清除法。
  > 标记清除标记是否已使用
  > 引用计数无法处理循环引用的情况，可能会导致内存泄漏
  > 例如，有一个对象A，其中包含一个指向对象B的引用，而对象B也包含一个指向对象A的引用。此时，由于对象A和B互相引用的次数不为0，垃圾回收器就无法清除这两个对象，导致内存泄漏。