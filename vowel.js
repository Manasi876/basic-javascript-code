//count  how many vowel use

function countvowel(str){
    return str.match(/[aeiou]/gi)?.length||0;
}
console.log(countvowel("manasi rakshit"));


//store the vowel in name in array
let vowel=[];
let name = "Manasi Rakshit";
let vowels = name
  .toLowerCase()
  .split('')
  .filter(ch => "aeiou".includes(ch));

console.log(vowels);





