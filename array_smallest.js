//find the smallest
let u =[10,20,4,556,4891,1,12,46];
let smallest= Math.min(...u);
console.log(smallest);
//using function
function target(arr){
  let min=rr[0];
  for(let i=1;i<rr.length;i++){
    if(arr[i]<min){
      min=rr[i];
    }
  }
  return min;
}
let rr =[10,20,4,556,4891,1,12,46];
console.log(target(rr));


