
// Function Declaration - Subtraction
function sub(num1, num2) {
  if (num1 > num2) {
    console.log(num1 - num2);
  } else if (num2 > num1) {
    console.log(num2 - num1);
  } else {
    console.log(0);
  }
}
sub(7, 3);




//using function check greater
const great = (a,b,c) => {
  if(a>b && a>c){
    console.log("a is greater");
   
  } else if(b>a && b>c){
       console.log("b is graeter");
       
  } else if(c>a && c>b){
        console.log("c is greater");
  }
}

great(2,8,6);


//using function check greater or not
const pm = function(num){
      if(num%2 === 0){
            console.log("even");
        
          } else{
                console.log("odd");
            
              }
            }
            
            pm(8);

      
const checkEvenOdd = (num) => {
  console.log(num % 2 === 0 ? "even" : "odd");
};

checkEvenOdd(4);

//using switch case

function calculate(num1, num2, op) {
  switch (op) {
    case '+':
      console.log(`Result: ${num1 + num2}`);
      break;
    case '-':
      console.log(`Result: ${num1 - num2}`);
      break;
    case '*':
      console.log(`Result: ${num1 * num2}`);
      break;
    case '/':
      console.log(`Result: ${num1 / num2}`);
      break;
    case '%':
      console.log(`Result: ${num1 % num2}`);
      break;
    case '**':
      console.log(`Result: ${num1 ** num2}`);
      break;
    default:
      console.log(" Invalid operator");
  }
}

calculate(4, 4, "**");
calculate(4, 4, "*");
calculate(4, 4, "+");
calculate(4, 4, "-");
calculate(4, 4, "%");
calculate(4, 4, "/");

            
//using swap

const swap = (num1,num2) => {
   console.log("Before swaping : ", num1,num2);
   num1 = num1 + num2;
   num2 = num1 - num2;
   num1 = num1 - num2;
   console.log(num1, num2);
   
}

swap(8,1);

//pi value
const getpi = () => {
    console.log("3.14");
}
getpi();

// Function Expression - Addition
const add = function(a, b) {
  return a + b;
};
console.log(add(6, 9));

//  Arrow Function (Implicit Return) - Multiplication
const mul = (a, b) => a * b;
console.log(mul(4, 4));

// Arrow Function (Explicit Return) - Division
const div = (a, b) => {
  if (b === 0) {
    console.log(" Cannot divide by zero");
  } else {
    console.log(a / b);
  }
};
div(8, 2);

