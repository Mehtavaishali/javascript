" use strict"; // traet all JS code as newer version

// alert ("hello")
// alert(3+3) // we are using nodejs not browser thats why error occured

/**************************DATA TYPE*********/

// Primitive
// 7: String,Number, Boolean, null, undefined,symbol.BigInt

const id =Symbol("123")
const value=Symbol("123")
console.log(id===value);


// Reference
// Array, Objects, Functions

const hero=["ab","cd","ef"];
let myobj={
    name: "abc",
    age: 22
}

const myFunction= function(){
    console.log("hello ");
}

// console.log(typeof myFunction);
console.log(myFunction);


// console.log(3+3);console.log("mehta")
// // OR 
// console.log(3+3)
// console.log("mehta")  // code readability should be high

let name="vaish"
let age=18
let isLoggedIn=false
let state =null

// number =>2 to power 53
//bigint
//string=> ""
//boolean=> true/false
// null=> standalone value
//symbol => unique

//object

// console.log(typeof"mehta")
