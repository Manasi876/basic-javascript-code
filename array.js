let marks=[97,66,75,89,76];
console.log(marks);
console.log(marks.length);

//remove first element
let h=marks.shift();
console.log("after remove first:"+marks);
//remove last 2
let kh=marks.pop();
console.log("after removing last two:"+marks);
//remove every thing accept middle
let gf=marks.splice(-2);
console.log("middle:"+marks);


 //check prime or not for each index number in array       
let a = [19, 17, 16, 14, 2222, 21];

for (let i = 0; i < a.length; i++) {
  let num = a[i];
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(num + " is Prime");
  } else {
    console.log(num + " is Not Prime");
  }
}
//remove this name which have more than 3 vowel parasent
let hi=["manasi","ritu","raju","bitu","priyadarshini"];
for(i=0;i<hi.length;i++){
    function countvowel(str){
    return str.match(/[aeiou]/gi)?.length||0;
}
console.log(countvowel(hi));
if(vowel>3){
    console.log(hi.pop);
}

}




