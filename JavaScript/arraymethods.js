let prices = [10,20,30,40,50]
let updatedprices = prices.map(price => price +100)
// console.log(updatedprices);

let names = ['sujith','sreejas','lathas']
let updates = names.map(nam => nam.toLocaleUpperCase())
// console.log(updates);

let filters = prices.filter(pr => pr > 20)
// console.log(filters);

let reduce = prices.reduce((sum,pr)=> sum + pr,0)
// console.log(reduce);

let employees = [
    { id: 101, name: "Sujith" },
    { id: 102, name: "sreejas" },
    { id: 103, name: "lathas" }
];
let finds = employees.find(emp => emp.name == 'sreejas')
// console.log(finds);

let some = employees.some(emp => emp.id == 101)
// console.log(some);

let every = employees.every(emp => emp.id > 100)
// console.log(every);

let nums = [10,50,80,90,40,1,5,0,3,25,2,4,3,1]
let sort = nums.sort()
// console.log(sort);

let dec = nums.sort((a,b)=> b - a)
// console.log(dec);

const products = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Mouse", price: 500, inStock: true },
    { name: "Keyboard", price: 1500, inStock: false },
    { name: "Headphones", price: 2000, inStock: true }
];

let discounted = products.map(pr => ({
    ...pr,
    price: pr.price * 0.9
}))

let affordble = products.filter(fr => fr.price < 2000)

let total = products.reduce((sum,pr)=> sum +pr.price , 0)

let found = products.find(pr => pr.price == 1500)

let expensive = products.some(pr => pr.price > 10000)

let allinstock = products.every(pr => pr.inStock)

let sorted = [...products].sort((a,b)=> a.price - b.price)

console.log('discounted prices ',discounted.map(p=> p.price));
console.log('affordable ',affordble.map(p=> p.name));
console.log('cart total',total);
console.log('expensive',expensive);
console.log('all in stock',allinstock);
console.log('cheapest first ',sorted.map(p=> p.name));
