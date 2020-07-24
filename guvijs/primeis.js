function p(n)
{
var i,f=true;
for(i=2;i<=n-1;i++)
if(n % i == 0)
{
f=false;
break;
}
if(f == true)
{
document.write("is prime");
}
else
{
document.write("is not prime");
}
}
p(5);
