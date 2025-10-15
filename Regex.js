//email for test
const email = "test@example.com"; 
const pattern = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 
console.log(pattern.test(email));
//email for match
const emaiil = "test@example.com"; 
const patternn = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 
console.log(patternn.test(emaiil));


//  check username valid or not
function valid(username){
const pattern1=/^[A-Za-z0-9]{5,12}$/;
if(pattern1.test(username)){
    console.log("valid");
}else{
    console.log("invalid");
  }
}
valid("nit342");

//find all email in paragraph
function findemail(Text){

    const pattern = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 
    const emails=Text.match(pattern);
    if(emails){
        console.log("found id:",emails );

    }else{
        console.log("not email found:");
    }

}
const paragraph="contact us at 54877r33125,info@gyi655.otf,nit@gmail.com,test@example.com,suppoet2353@er.com or reach out to admin65634@mail.com in for your help";
findemail(paragraph);

