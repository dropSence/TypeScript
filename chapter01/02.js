var a;
a = 10;
function foo(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log('rest:', rest);
    return a + b;
}
var b;
b = 1;
var c; // 
// a = c // unknown类型不能直接赋值给其他变量
c = 12;
// if (typeof c === 'number') { a = c }  //  判断方式解决
a = c; // 也可以采取类型断言的方式解决问题
// a = <number>c  // 也可以采取类型断言的方式解决问题
var d;
a = d; // any类型可以赋值给其他类型的变量
function f1() {
    throw new Error('Error!');
}
function f2() { }
