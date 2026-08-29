function Student(name,grade){  //use capital letter to distinguish between constructor and methods
    this.name=name
    this.grade=grade
    this.greet=function(){
        console.log(`hey i'm ${name}`);
        
    }
}
let student1=new Student('shahi',2)
let student2=new Student('sania',2)
student1.greet()
student2.greet()
console.log(student1);

