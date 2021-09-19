function validate(){
    var uemail = stdreg.uemail.value;
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
    alert("Form Submitted!"); 
return true;
}
else
{
alert("Invalid email address!");
return false;
}
}