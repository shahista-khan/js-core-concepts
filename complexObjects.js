//complex object means object inside another object
let mobile={
    name:'One Plus',
    storage:228,
    apps:{
        insta:'reels',
        chatgpt:'home work'
    }
}
/*if we try to fetch an object or maybe you can say a variable
that is not there it gives 'undefined'
and if we try to get the length of something that is not defined
it gives error
so to prevent geting that error we use ? to check if that object/
variable exists or not 
if it doesn't exist it gives undefined rather than an error
*/
console.log(mobile.apps?.insta?.length);
delete mobile.storage//to delete a key value pair/property
console.log(mobile);
for(let key in mobile.apps){//for in loop used to fetch all values one by one ,key is just a variable name can be anything
    console.log(key,mobile.apps[key]);
}  

