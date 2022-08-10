let a: { name: string }
a = { name: 'wang' }

let b: [string, string, number]  // tuple
b = ['1', '1', 1]

/**
 * enum 枚举
 */

enum Gender {
    Male = 0,
    Female = 1
}

let c: { name: string, gender: Gender } = { name: 'Zy', gender: Gender.Female }
console.log(c.gender === Gender.Female);

type myType = 1 | 2 | 3 | 4 | 5 | 6
let d: myType
d = 1