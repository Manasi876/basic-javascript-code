//check prime or not
var num=165;
if(num<=1){
    console.log("not a prime ")
}else{
    for(let i=2;i<=Math.sqrt(num);i++){

    
        if(num % i===0){
            console.log("not prime number");

        }else
            {
                console.log("the number is prime");
            }
      }  
}