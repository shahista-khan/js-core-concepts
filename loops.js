let i=5
//while loop --> checks for the condition first and then executes the block
while(i>2){
    console.log("hii",i);
    i--
}
//Do while --> executes the block first and then checks the condition
do{
    console.log("hii",i);
    i--
    console.log("\n");
    
}while(i>0)
//for loop -->infinite loop if no condition
//for(;;i++){
//    console.log("hii",i);

//}
//reverse of a number
let num=141105,r=0
while(num>0){
    r=r*10
    r=r+(num%10)
    num=parseInt(num/10)
}
console.log(r)