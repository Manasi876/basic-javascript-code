//using function
function goal(arr){
  let max=arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}
let arr =[10,20,4,556,4891,1,12,46];
console.log(goal(arr));

//find the greatest/largest
let hu =[10,20,4,556,4891,1,12,46];
let large= Math.max(...hu);
console.log(large);

//find second largest
//using function
function largest(arr){
  let max=arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max-1;
}
let r =[12,35,1,10,34,1];
console.log(largest(r));

//or
function getsecondlargest(arr){
    let largest =-1, secondlargest= -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]>secondlargest && arr[i]!== largest){
                secondlargest=arr[i];
                console.log(secondlargest);
            }
            return secondlargest;
        }

        }
    
}
console.log(getsecondlargest([2,3,6,6,5]));


