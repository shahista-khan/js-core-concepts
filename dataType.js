let num1=142345674345566544566//comes under number
console.log(typeof num1)

let user="shahi"//string
console.log(typeof user)

let num2=23.46//this also in number
console.log(typeof num2)

let num3=6/0//infinity
console.log(num3,typeof num3)

let num4=-6/0//negative infinity
console.log(num4,typeof num4)

console.log(Number.MAX_VALUE)//gives the maximum value a number can store

let num5=1324623678964357897532356786445
console.log(num5,typeof num5)//this will give output something like 1.something e+something

let num6=126274863946598365657483947579394n//this is a big int , we cannot add a int to a big int
console.log(num6,typeof num6)//this will give the same number in output including n

let num7//it's undefined
console.log(num7,typeof num7)//type is also undefined

let num8=null
console.log(num8,typeof num8)//it's type is object

let num9=5>6
console.log(num9,typeof num9)