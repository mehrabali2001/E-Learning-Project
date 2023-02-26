function hello1()
{
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var mob=document.getElementById("mob").value;
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

 if(uname.length<4)
 {
    text="*Please enter valid username";
    err_message.innerHTML=text;
    return false;

 }
 if((uname==" "))
 {
    text="*Please enter valid username with upper & Lower";
    err_message.innerHTML=text;
    return false;
 }
 if(!isNaN(uname))
 {
    text="*Please enter only alphabet char";
    err_message.innerHTML=text;
    return false;
 }

 if(pass.length<5 ||pass.length>10)
 {
    text="*Please enter valid password";
    err_message.innerHTML=text;
    return false;
 }

 if(email.indexOf('@')==-1)
 {
 text="*Please enter valid email id";
 err_message.innerHTML=text;
 return false; 
 }

 if(mob.length!=10)
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false;
 }
 if(mob==" ")
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false; 
 }
 if((mob.charAt(0)!=9 )&&(mob.charAt(0)!=8) &&(mob.charAt(0)!=7 )&&(mob.charAt(0)!=6))
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false; 
 }
 alert("You are successfully Register!");
 return true;
}