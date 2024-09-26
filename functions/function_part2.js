function calculate_cart_price(val1,val2,...num1){// ... can be rest operator as well as spred operator
    return num1
}
console.log(calculate_cart_price(200,300,500,600,400));
const user={
    name:"mehta",
    price:198
}
function handle_object(any_object){
    console.log(`username is ${any_object.name} and the price is ${any_object.price}`);
}
// handle_object(user)
handle_object({
    name:"sam",price:200
})
const myArr=[200,300,400,500]
function return_second_value(getArray){
    return getArray[1]
}
console.log(return_second_value(myArr));
