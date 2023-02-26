function hello3()
{
    var name=document.getElementById("name").value;
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    // var mob=document.getElementById("mob").value;
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
 if(name==" ")
 {
    text="*Name cannot be null";
    err_message.innerHTML=text;
    return false;
 }
 if(!isNaN(name))
 {
    text="*Please enter only alphabet char";
    err_message.innerHTML=text;
    return false;
 }

 if(uname.length<3)
 {
    text="*Please enter valid email id";
    err_message.innerHTML=text;
    return false;

 }
 if((uname==" "))
 {
    text="*Please enter valid email id";
    err_message.innerHTML=text;
    return false;
 }
 if(!isNaN(uname))
 {
    text="*Please enter valid email id";
    err_message.innerHTML=text;
    return false;
 }
 if(uname.indexOf('@')==-1)
 {
 text="*Please enter valid email id";
 err_message.innerHTML=text;
 return false; 
 }
 if(pass.length!=10)
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false;
 }
 if(pass==" ")
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false; 
 }
 if((pass.charAt(0)!=9 )&&(pass.charAt(0)!=8) &&(pass.charAt(0)!=7 )&&(pass.charAt(0)!=6))
 {
    text="*Please enter valid Mobile Number";
    err_message.innerHTML=text;
    return false; 
 }

 if(email==" ")
 {
    text="*Please enter valid Domain";
    err_message.innerHTML=text;
    return false; 
 }
//  if(email.indexOf('@')==-1)
//  {
//  text="*Please enter valid email id";
//  err_message.innerHTML=text;
//  return false; 
//  }

//  if(mob.length!=10)
//  {
//     text="*Please enter valid Mobile Number";
//     err_message.innerHTML=text;
//     return false;
//  }
//  if(mob==" ")
//  {
//     text="*Please enter valid Mobile Number";
//     err_message.innerHTML=text;
//     return false; 
//  }
//  if((mob.charAt(0)!=9 )&&(mob.charAt(0)!=8) &&(mob.charAt(0)!=7 )&&(mob.charAt(0)!=6))
//  {
//     text="*Please enter valid Mobile Number";
//     err_message.innerHTML=text;
//     return false; 
//  }
 if(dob==" ")
 {
    text="*Year of Experience cannot be null";
    err_message.innerHTML=text;
    return false; 
 }
//  if(dob>=-1 || dob<=8)
//  {
//     text="*Invalid Year of Experience";
//     err_message.innerHTML=text;
//     return false; 
//  }
 alert("You are successfully Register!");
 return true;
}