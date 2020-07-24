function prime(n)
{
for(var i=1;i<=n;i++)
{
var c=0;
for(var j=2;j<=i;j++)
{
if(( i % j) ==0)
{
c=0;
}
}
document.write(j);
}
}
prime(100);