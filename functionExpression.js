let add=function(num1,num2)          //anonymous fuction and can not be called directly because it does not have a 
        {
            return num1+num2
        }
let sum=add(5,6)   //function is assigend to add so indirectly add is also a function     
console.log(sum);  //we can call function by assigning add to a different variable or
console.log(add(14,8));  //we can directly call add


// ARROW FUNCTION
let addition=(num1,num2)=>num1+num2  //when we have only one statement onthe function we don't have to use {} and if that statement a return statement we don't even have to use return keyword
console.log(addition(5,6))
