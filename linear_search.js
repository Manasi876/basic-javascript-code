function linearSearchAll(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push(i);
    }
  }
  return result;
}

console.log(linearSearchAll([1, 2, 5, 3, 5, 4], 5));  
