#include<stdio.h>

int main()
{
int k,l,m,n,d,count=0,i;
scanf("%d\n",&k);
scanf("%d\n",&l);

scanf("%d\n",&m);
scanf("%d\n",&n);
scanf("%d",&d);
for(i=1;i<=d;i++){

if(i%k==0 || i%l==0 || i%m==0 || i%n==0) 
{
count++;
}
}
printf("%d",count);
return 0;
}