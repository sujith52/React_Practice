import {add as addition,sub} from './app.js'
import {greet} from './app.js'
import{getRes} from './app.js'

console.log(add(10,50));

console.log(sub(100,20));

console.log(addition(10,2))

console.log(greet('sujith'));

function outer(){
    let msg = `hello sujith`
    function inner(){
        console.log(msg);
    }
    return inner
}

let runfunction = outer()
runfunction()

let student = {
    name : 'sujith',
    greeting(){
        console.log(`hello mister ${this.name}`);
        
     }
}
student.greeting()

class Students{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}

let s1 = new Students('sujith')
s1.greet()

let stud = {
    name : 'sujith',
    marks : 60,
    display(){
        console.log(`student : ${this.name}`);
        console.log(`marks : ${this.marks}`);
        console.log(`results : ${getRes(this.marks)}`);
    }
}

stud.display()