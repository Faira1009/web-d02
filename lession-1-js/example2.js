let b = 1;
let a = b;
console.log (b === a);
a = 3;
console.log (b === a);

let obj1 = { a: 1};
let obj3 = obj1
console.log (obj1 === obj3);
obj3.a = 3;
console.log(obj1 === obj3)