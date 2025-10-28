let n=8;
let a=0,b=1;
console.log("fibonacci series:");
    for(let i=0;i<n;i++){
        console.log(a);
        let next=a+b;
        a=b;
        b=next;
        //console.log(a);
    }


//using recursion
    function fibo(n){
        if(n===0||n===1){
            return 1;
        }
         return fibo(n-1)+fibo(n-2);
    }
    console.log(fibo(10));
