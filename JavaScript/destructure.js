let student = {
    name: `sujith kumar`,
    age:22,
    course:'javascript'
}

let name1 = student.name
console.log(name1);

let {name2,age2,course} = student
console.log(name,age,course);

let { name:studentName, cit2y='bengaluru'} = student
console.log(studentName,city);

let colors = ['red','green','blue']
let [first,,second] = colors 
console.log(first,second);

let original = [1,2,3,4,5]
let copy = [...original]
console.log(copy);

let mains = [10,20,30,40]
let comb = [...copy,...mains]
console.log(comb);

let stud = {name:'sujith', age:22}
let update = {...stud,age:26}
console.log(update);

function addAll(...nums){
    return nums.reduce((total,n)=> total+n, 0)
}
console.log(addAll(10,20,30));

let user = {
    name:'sujith',
    address:{
        city:'madanapalle'
    },
    username : null
}
console.log(user.address?.city);
console.log(user.address?.name);
console.log(user.username ?? 'sujith1368');

let users = {
    name : 'sujith',
    age:22,
    address: {
        city:'madanapalle'
    },
    skills:['html','tailwind css','js','jsx','node']
}

let {name,age} = users

let updatedskills = [...(users.skills ?? []), 'python']

let city = users.address?.city ?? 'unknown'
let bio = users.profile?.bio ?? 'no bio available'

let {name:username , ...otherDetails} = users

let profile = `
name : ${name},
age : ${age},
city: ${city},
bio: ${bio},
skills : ${updatedskills.join(',')}`

console.log(profile);
