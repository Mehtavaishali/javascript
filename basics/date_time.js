//**************DATES************/

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24) //month start from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 23, 15, 3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")// more preferred
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());//4 represent thursday

// `${newDate.getDay()} and the time ` //string interpolation

newDate.toLocaleString('default', { // we can define objects and various parameters
    weekday: "long"
})