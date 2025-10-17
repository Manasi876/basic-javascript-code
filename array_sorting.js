let arr=[1,5,9,0,4];
arr.sort((a,b)=>a-b);
console.log(arr);
//using function
function sort(a,n){
    var i=0;
    while(i<n){
        var correct=a[i]-1;
        if(a[correct]!=a[i]){
            swap(a,i,correct);
        }else{
            i++;
        }
    }
}
function swap(a,i,correct){
    var temp=a[i];
    a[i]=a[correct];
    a[correct]=temp;
}
var a=[2,6,1,8,4,7,9];
var n=7;
sort(a,n);
for(let i=0;i<n;i++){
    console.log(a[i]);
}
sort();

//.length
//.toString
//.at
//.pop
//.push
//unshift
//shift
//delet()
//concat
//splice
//toSplice
//copyWithin