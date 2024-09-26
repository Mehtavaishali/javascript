// stack => primitive (copy)
// heap => non-primitive (reference)

let name="mehtaworld"
let another_name= name
another_name = "vaishali"
// console.log(name);
// console.log(another_name);

let user1={
    email: "user@gm.com",
    password: "1234"
}
let user2 =user1

user2.email="gggg@hh.b"
console.log(user1.email);//heap main reference same milta h 
console.log(user2.email);