function say_name(){   // FUNCTION DEFINITION
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
// say_name // REFERENCE
// say_name() //EXECUTION WITH REFERENCE
function addNumber(num1,num2){  //Parameters are passed
    // let result=num1+num2
    // console.log(result); 
    // return result
    return num1+num2
      
}
const result=addNumber(3,5) // Arguements are passed
// console.log("Result ",result);
// console.log(addNumber(3,5));

function login_user_message(username="sam"){
    if(!username){
        console.log("pls enter a username");
        return 
    }
    return `${username} just logged in `
}
// console.log(login_user_message("mehta"));
// console.log(login_user_message());

