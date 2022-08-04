let a: number
a = 10

function foo(a: number, b: string, ...rest): string {
    console.log('rest:', rest);
    return a + b
}

let b: 0 | 1
b = 1

let c: unknown // 
// a = c // unknown类型不能直接赋值给其他变量
c = 12
// if (typeof c === 'number') { a = c }  //  判断方式解决
a = c as number  // 也可以采取类型断言的方式解决问题
// a = <number>c  // 也可以采取类型断言的方式解决问题

let d: any
a = d  // any类型可以赋值给其他类型的变量

function f1(): never {
    throw new Error('Error!')
}

function f2(): void { }