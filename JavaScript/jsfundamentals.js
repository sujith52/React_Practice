let name = `sujith`
console.log(name)

const student = {name : 'sujith'}
student.name = 'sreejas'
console.log(student.name);

let add = (a,b) => {
    console.log(a+b);
}
add(10,20)

let greet = ()=> "Hello world !"
console.log(greet());

let cal = (a, b) => {
    let res = a + b
    return res * 2
}
console.log(cal(10,2));

let names = 'sujith', age = 22
let msg = `my name is ${names} , and my age is ${age}`
console.log(msg);

const studname = `sujith`
let marks = 90

const res = (marks) => 
    marks >= 70 ? `pass ${studname}` : `fail ${studname} bro`

const results = res(marks)

const mesg = `Student : ${studname}
marks : ${marks}
result : ${results}`
console.log(mesg);
