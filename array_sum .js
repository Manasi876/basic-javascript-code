
function arraysum(arr,index=0){
    if(index>=arr.length){
        return0;
    }
    return arr[index]+arraysum(arr,index+1);
}
let arr=[45,55,124,46,58];
console.log(arraysum());