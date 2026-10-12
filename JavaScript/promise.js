let myPromise = new Promise((res,rej)=>{
    let success = true
    if(success){
        res(`task completed`)
    }else {
        rej('task has failed ')
    }
})

myPromise
.then(res => console.log(res))
.then(err=> console.log(err))

async function getData() {
    let resu = await Promise.resolve('hello bro')
    console.log(resu);
}

getData()

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res=> res.json())
.then(data => console.log(data))

async function getAPI() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!response.ok){
            throw new Error(`failed to fetch the data`)
        }
        let data = await response.json()
        console.log(data);
        
    } catch(e){
        console.log(`error is ${e}`);
        
    }
}

getAPI()

let students = {
    name:'sujith',
    age : 22
}

let data = JSON.stringify(students)
console.log(data);

let dataset = '{"name":"sujith","age":22}'
let jsonss = JSON.parse(dataset)
console.log(jsonss);


console.log('hello');

setTimeout(()=> {console.log('second')},0)
console.log('end');

let heading = document.getElementById('heading')
heading.textContent = 'Hello bro !'