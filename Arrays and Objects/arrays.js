const myArr=[1,2,3,4,5,true,"vaish"]//resizable array
const fruits=["mango","apple"]

const arr2=new Array(1,2,3,4,5)
// console.log(myArr[5]);


//ARRAY METHODS

arr2.push(6)
arr2.pop()
// console.log(arr2);

arr2.unshift(9)
arr2.shift()
// console.log(arr2);

// console.log(arr2.includes(9));//boolean value
// console.log(arr2.indexOf(9)); // if not found return -1

const newArr=arr2.join()// create newArr in string  
// console.log(typeof arr2);// object
// console.log(arr2);

// console.log(typeof newArr);//string
// console.log(newArr);


//SLICE AND SPLICE

// console.log("A ",arr2);
const my1=arr2.slice(1,3)// slice Does not modify the original array 
// console.log(my1);
// console.log("B",arr2);

const my2=arr2.splice(1,3)// splice Modifies the original array.
// console.log("c",arr2);
// console.log(my2);

const fruit=["mango","apple","grapes"]
const vegetable=["potato","pea","tomato"]
// fruit.push(vegetable)

// console.log(fruit);
// console.log(fruit[3][1]);

// const fnew=fruit.concat(vegetable)
// console.log(fnew);

const finalnew=[...fruit,...vegetable]
// console.log(finalnew);

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another= another.flat(Infinity)
// console.log(real_another);

// console.log(Array.isArray("mehta"));
// console.log(Array.from("mehta"));
// console.log(Array.from ({name:"mehta"}));  // interesting and return empty array

let score1=100
let score2=200
let score3=300
// console.log(Array.of (score1,score2,score3));



