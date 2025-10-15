//object
const person= {
    name:"manasi",age:19,sc:"c",coliege:"nit"
}
person.age=12;
person.add="kdp";
console.log(person);
//spreate
const  person1={
    ...person,pin:5445,block:true
}
console.log(person1);
//delete
 const{age ,sc,block}=person1;
 onsole.log(age);
 onsole.log(sc);
 onsole.log(block);