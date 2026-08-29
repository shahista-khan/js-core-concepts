/*a method is a function that is stored as a property of
 an object. It defines the behavior or actions that an
  object can perform, operating on the data contained 
  within that specific object*/
  let laptop1={
       cpu:'i7',
       ram:8,
       brand:'dell',
       compare: function(other){
        let result=this.cpu>other.cpu?console.log(this):console.log(other);
       }
       
  }
  
  let laptop2={
       cpu:'i9',
       ram:16,
       brand:'HP',
       
  }
  laptop1.compare(laptop2)