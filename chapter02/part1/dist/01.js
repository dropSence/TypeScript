"use strict";
class Person {
    // 实例属性
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 方法
    sayHello() {
        console.log('Hello World!');
    }
    static speak() {
        console.log('Person!');
    }
}
// 类属性
Person.sex = 1;
class Dog extends Person {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    sayDog() {
        console.log('Dog');
    }
}
const dog = new Dog('Zy', 14, 'blue');
dog.sayHello();
