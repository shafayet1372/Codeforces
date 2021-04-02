#include<stdio.h>

int main()
{
int n,x,y,big=-1,pas;
scanf("%d",&n);
int i;
for(i=0;i<n;i++){

scanf("%d %d", &x, &y);

if(i>0){
pas=(pas-x)+y;
}else {
 pas=x+y;
}
if(pas>big){
big=pas;
}
}
printf("%d",big);
return 0;
}