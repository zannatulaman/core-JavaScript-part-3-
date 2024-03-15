let name = "Abdur Rahman";

function myfunc(){
    let number = 10;
    if(number ===10){
        const childNumber = 50;
      console.log("The value comes from parent block", number); 
      console.log("This is child value", childNumber);
      if(true){
        console.log("This is nested value", childNumber);
      }
      console.log(name);
    }


}
myfunc()