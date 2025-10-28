let marks=[97,66,75,89,76];
console.log(marks);
marks.push(79);
console.log(marks);
marks.pop();
console.log(marks);
//queue
marks.shift();
console.log(marks);

function reverse(person){
    return person.split('').reverse('').join('');
}
let person="manasi";
 console.log(reverse(person));
 //create empty stack a
 let arr=[];
 let m="manasi rakshit";
 for(let i=0;i<m.length;i++){
    arr.push(m[i]);
 }
 console.log(arr);
 //console.log(arr.tostring);
 console.log(arr.reverse());