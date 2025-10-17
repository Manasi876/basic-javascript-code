//for clockwise
function rotation(arr,d){
    let n=arr.length;
    for(let i=0;i<d;i++){
        let temp=arr[n-1];
        for(let j=n-1;j>0;j--){
            arr[j]=arr[j-1];
            console.log(arr);
        }
        arr[0]=temp;
    }
}
let arr=[1,2,3,4,5,6];
d=2;
rotation(arr,d);
console.log(arr.join(" "));

//for antoclock wise
function rotationLeft(a, b) {
  let n = a.length;
  for (let i = 0; i < b; i++) {
    let temp = a[0];
    for (let j = 0; j < n - 1; j++) {
      a[j] = a[j + 1];
      console.log(a);
    }
    a[n - 1] = temp;
  }
}

let a = [1, 2, 3, 4, 5, 6];
let b = 2;
rotationLeft(a, b);
console.log(a.join(" "));

