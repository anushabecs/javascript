function cgpa()
{
var n1=parseInt(document.getElementById("n1").value);
var n2=parseInt(document.getElementById("n2").value);
var n3=parseInt(document.getElementById("n3").value);
var n4=parseInt(document.getElementById("n4").value);
var n5=parseInt(document.getElementById("n5").value);
var a= (n1+ n2 + n3 + n4+ n5)/5;
var cgpa =9.5 *a;
document.getElementById("ans").value=cgpa;
}