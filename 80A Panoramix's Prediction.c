#include<stdio.h>

int main()
{
int n,x;
scanf("%d %d",&n,&x);
int i,j,count,s;
for(i=n+1;i<=x;i++){
 count=0;
 for(j=1;j<=i;j++){
 if(i%j==0){
count++;
}
if(count>2){
break;
}
}
if(count==2){
s=i;
break;
}
}
if(s>0){
if(s==x){
printf("YES");
}else{
printf("NO");
}
}else{
printf("NO");
}

return 0;
}