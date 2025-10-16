//according to giveing array print alternative element 
arr=[48,12,66,68,71];
for(let i=0;i<=arr.length;i=i+2){
  console.log(arr[i]);
}
//reverse using two pointer method

function reverseArray(y){
  let left=0;
  right=y.length-1;
  while(left<right){
    [y[left],y[right]]=[y[right],y[left]]
    left++;
  right--;
  }
  
}
y=[1,2,3,4,5,6,7];
reverseArray(y);
console.log(y.join(" "));

//reverse using 
function reversearray(a){
  let n=a.length;
  for(let i=0;i<a.length/2;i++){
    let temp=a[i];
    a[i]=a[n-i-1];
    a[n-i-1]=temp;
  }

}
const a=[1,2,3,4,5,6,7];
reversearray(a);
console.log(a.join(" "));

//or
function reverse(arr0){
  arr0.reverse();
}
const arr0=[1,2,3,4,5,6,7];
reversearray(arr0);
console.log(arr0.join(" "));