//find grade
let mark=prompt("enter your mark:");
//mark=number(mark);
console.log("the mark you enterd is:"+mark);
if(mark==90 && mark ==100){
    console.log("grade is :A");
}else if(mark==70 && mark==89){
    console.log("grade is:B");
}else if(mark==60 && mark==69){
    console.log("grade is:C");
}else if(mark==50 && mark==59){
    console.log("grade is:D");
}else {
    console.log("grade is:F");
}