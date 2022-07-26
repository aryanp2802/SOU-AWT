console.log('hii')
let first = "Enter something"
let last = "Enter something"
let pr = prompt(" " + first)
let rp = prompt(" " + last)
let add = pr.concat(" " + rp)
alert(add)

let obj = new Object();
console.log(Object, typeof (obj))

function add2() {
    let first = "Enter something"
    let last = "Enter something"
    let f = Number(prompt(" " + first));
    let l = Number(prompt(" " + last));
    let add1 = f.addition(" " + l);
    alert(add1);
}

var obj1 = new Object();
console.log(Object, typeof obj1);

let int = 28;
let string = "Patel";
let bool = true;

console.log(typeof int);
console.log(typeof string);
console.log(typeof bool);

var car = {
    brand: "Ford,",
    model: "Mustang,",
    door: 5 + " doors",
};

console.log(car.brand, car.model, car.door);

var car = [
     "Ford",
     "Mustang",
     "doors",
];

console.log(car.indexOf("Ford"), car.indexOf("Mustang"), car.indexOf("doors"));



