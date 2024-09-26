const tind_user=new Object()// constructor object
// const tind_user={} // singleton object
tind_user.id="123abc"
tind_user.name="kartik"
tind_user.is_logged=false
console.log(tind_user);

const regular={
    email:"vaish@gamil",
    fullname:{
        username:{
            first:"vaish",
            last:"mehta"
        }
        
    }
}
// console.log(regular.fullname.username.first);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}

// const obj3=Object. assign({},obj1,obj2,obj4) //empty array is used as it represent target and rest array as source
const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tind_user);
// console.log(Object.keys(tind_user));//array of keys
// console.log(Object.values(tind_user));// values of objec as array
// console.log(Object.entries(tind_user));
// console.log(tind_user.hasOwnProperty("is_logged"));
