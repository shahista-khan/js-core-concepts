let arr=new Array()//a way to an array
let arr1=[2,5]//another way
arr.push(14)
arr.push(7)
console.log(arr);
console.log(arr1[0]);//if try to fetch index value more tha array length it will give 'undefined' instead of index out of bound error
let data=['shahi',67,function(){console.log("hii")},{lang:'js'}]
//in js a single array can have different data types--sting,object,func,numb
data[2]()//function call
console.log(arr.push(27));  //push add an element in the end an returns length of array
console.log(arr.pop());  //pop removes the top most element and also returns it

console.log(arr.shift())  // removes zeroth index element and returns it
console.log(arr.unshift(55));//add an element at the zeroth index and returnts array's length
arr.push(32,67)//we can push multiple values at a time

console.log(arr);
console.log(arr.splice(2)); //removes all elements starting from that index to the end and returns them
console.log(arr.splice(0,1,14,76,55)); //the second num after comma tells how my elements to be removed starting from that index and after that we can even add multile elements
console.log(arr);
for(let i of arr){
    console.log(i);
}
for(let i in arr){
    console.log(arr[i]);
}
//can use both loops
//in for of loop it gives undefined if some idecies are empty or unassigned
//in for in loop it displays only the values that are assigned
let num=[]
num[0]=1
num[6]=87
for(let i of num){
    console.log(i);
}
for(let i in num){
    console.log(num[i]);
}

