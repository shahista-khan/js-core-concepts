let x=String(1404)//explicit way of converting a num into string S should ne capital
console.log(x,typeof x)

x=Number('1411Shahista')//cannot convert alphabets into string
console.log(x,typeof x)

x=parseInt('123shahi')//converts the numbers at the start into number type
console.log(x,typeof x)

x=1411
x=x+" "// whitespace is ignored in type coercion
console.log(x,typeof x)//any other non numeric character breaks conversion

x=x-2//we can also put a uniray(+/-) to convert x into numb type
console.log(x,typeof x)

console.log(Boolean(7))//every number is true except zero and null
console.log(Boolean('shahi'))
//if you paas somethimg to boolean and it give true its a truthy value and falsy otherwise

let num1=true
let num2=true
let result =num1+num2
console.log(result)