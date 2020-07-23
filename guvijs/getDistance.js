function getDistance(x1, y1, x2, y2) 
{
var x,y,z;
x=x1-x2;
y=y1-y2;
z=Math.sqrt(x*x + y*y);
document.write(z,"<br/>");
 }
getDistance(100, 100, 400, 300);