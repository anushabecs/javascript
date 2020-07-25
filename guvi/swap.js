function swap()
{
var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
var c;
c=a;
a=b;
b=c;
document.getElementById("1").value=a;
document.getElementById("2").value=b;
}