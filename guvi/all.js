function add()
{
var n1=parseInt(document.getElementById("n1").value);
var n2=parseInt(document.getElementById("n2").value);
var a= n1+ n2;
document.getElementById("c").value=a;
}
function sub()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
var d= n1- n2;
document.getElementById("d").value=d;
}
function mul()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
var e= n1*n2;
document.getElementById("e").value=e;
}
function div()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
var f= n1/ n2;
document.getElementById("f").value=f;
}