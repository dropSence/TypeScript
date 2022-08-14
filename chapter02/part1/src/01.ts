class Person {
    name: String;
    age: number;

    // 实例属性
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 类属性
    static readonly sex: number = 1

    // 方法
    sayHello() {
        console.log('Hello World!');
    }

    static speak() {
        console.log('Person!');
    }
}

class Dog extends Person {
    color: string;
    constructor(name: string, age: number, color: string) {
        super(name, age)
        this.color = color
    }
    sayDog() {
        console.log('Dog');
    }
}


const dog = new Dog('Zy', 14, 'blue')
dog.sayHello()
