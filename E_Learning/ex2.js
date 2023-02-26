function hello2(){
   
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    var err_message=document.getElementById("err_message");
    err_message.style.padding="10px";
    var text;
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
 alert("Welcome to you!");
 return true;
    
}