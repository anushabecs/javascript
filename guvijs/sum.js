sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9”"); 
function sumCSV(s) 
{ 
var n=sumCSV.split(",");
var sum=0;
for (var i=0;i<n.length;i++)
{sum  + =parseInt(n[i].toString().match());
}
document.write(sum);
}
