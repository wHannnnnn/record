// 接口、 类
() => {
    // readonly只读不允许修改，?设置可选属性
    interface IPerson {
        readonly id: number
        name?: string
        age: number
    }
    var person: IPerson = {
        id: 111,
        age: 22
    }

// 类接口 类和接口之间是是实现（implements）
    interface IPerson1 {
        fn1():number
        fn2():Array<string>
    }
    class Person implements IPerson1 {
        fn1() {
            return 11
        }
        fn2() {
            return ['']
        }
    }
    new Person()
// 类接口可以使用多个
    interface IPerson2 {
        fn3():number | boolean
        fn4():Array<number>
    }
    class Person1 implements IPerson1,  IPerson2{
        fn1() {
            return 11
        }
        fn2() {
            return ['']
        }
        fn3() {
            return true
        }
        fn4() {
            return []
        }
    }
    new Person1()
// 接口可以继承， 接口和接口之间是继承（extends）
    interface IPerson3 extends IPerson, IPerson1{
        value: boolean
    }
    var person2: IPerson3 = {
        id: 11,
        age: 20,
        value: true,
        fn1() {
            return 11
        },
        fn2() {
            return ['']
        }
    }
// 类也可以继承类
    // 修饰符  public（默认） 
    // private（私有 外部和子类无法访问） 
    // protected（受保护 外部无法访问）
    // readonly 不允许修改属性，只有构造函数可以修改
    class Person2 extends Person1 implements IPerson3 {
        readonly val: number
        constructor(val: number){
            super()
            this.val = val
        }
        id = 11
        age = 20
        value = true
        fn1() {
            return this.val
        }
        fn2() {
            return ['']
        }
    }
    new Person2(11)
}
// 不同类型的对象调用相同的方法产生不同的行为，多态
// 存取器 get set 获取设置属性

// abstract 抽象类，不能被实例化，被子类继承为子类服务
()=>{
    abstract class person {
        abstract fn() // 抽象方法没有具体的实现，需要在子类中声明实现
        fn1():string{
            return null
        }
    }
    class person1 extends person {
        fn() {
        }
    }
    new person1()
}
// 函数重载 // 泛型
() => {
    function fn(x: string, y: string): string
    function fn(x: number, y: string): number
    function fn(x: string | number, y: string): string | number{
        return x
    }
    fn('1','a')
    // 泛型
    function fn1<T, Y>(x: T, y: Y): T|Y{
        return y
    }
    fn1<number, boolean>(2, true);
    // 泛型接口
    () => {
        class User {
            name: string
            age: number
            constructor(name: string, age: number){
                this.name = name
                this.age = age
            }
        }
        interface Iuser<T> {
            data: Array<T>
            addUser(user: T): void
        }
        interface ILength {
            length: number
        }
        class Users implements Iuser<User> {
            data: Array<User> = []
            addUser(user: User){
                this.data.push(user)
                console.log(user)
            }
        }
        new Users().addUser(new User('han', 22))
    }
}

