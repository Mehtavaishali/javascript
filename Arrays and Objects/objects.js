// singleton  created by constructors 
// Object.create

// OBJECT LITERALS

const mysym=Symbol("key1")

const user={
    name:"vaishali" ,  //key and values are given in objects
    age:18,
    "full name":"vaish mehta",
    // [mysym]:Symbol("mykey1"),//typeof is symbol
    [mysym]:"mykey2", // typeof is string 
    location: "noida",
    email: "vaish@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["monday","saturday"]

}

// console.log(user.email);
// console.log(user ["email"]);
// console.log(user["full name"]);
// console.log(typeof user[mysym]);

user.email="vaish@mehta"
// Object.freeze(user)
user.email="vaish@mecsabcasjta"
// console.log(user);


user.greeting =function(){
    // console.log("hello user");  
}
user.greeting2 =function(){
    // console.log(`hello user, ${this.name}`);//to reference same object we use this 

}
// console.log(user.greeting);
// console.log(user.greeting2());
