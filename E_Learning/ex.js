function hello()
{
 var name=document.getElementById("name").value;
 var subject=document.getElementById("subject").value;
 var email=document.getElementById("email").value;
 var message=document.getElementById("message").value;
 var err_message=document.getElementById("err_message");
 err_message.style.padding="10px";
 var text;
 if(name.length<4)
 {
 text="*Please enter valid name";
 err_message.innerHTML=text;
 return false;
 }
 if(name.length>10)
 {
 text="*Please enter valid name";
 err_message.innerHTML=text;
 return false;
 }
 if(!isNaN(name))
 {
    text="*Please enter only alphabet char";
    err_message.innerHTML=text;
    return false;
 }
 if(subject.length<10)
 {
 text="*Please enter valid subject";
 err_message.innerHTML=text;
 return false;
 }
 if(email.indexOf('@')==-1)
 {
 text="*Please enter valid email id";
 err_message.innerHTML=text;
 return false; 
 }
 if(message.length<=100)
 {
 text="*Please enter upto 100 chars";
 err_message.innerHTML=text;
 return false; 
 }
 alert("Form Submitted successfully!");
 return true;
}