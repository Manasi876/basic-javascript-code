const swap=(a,b)=>{
    console.log("value of a:",a);
    console.log("value of b:",b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("after swapping..");
    console.log("after swap value of a:",a);
    console.log("after swap value of b:",b);
}
swap(33,65);

//------
const sum=(a,b)=>{
    return a+b;//explicit
};
//--
const sum1=(a,b)=>a+b;//implicet
//--
const sum2=()=>{
    return a+b;
}
console.log(sum());
//implicet
const sum5=(x)=>x*x;
console.log(sum5(3));