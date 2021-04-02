#include<stdio.h>

int main()
{
int k,l,n;
scanf("%d",&n);
int lo=0,lc=0,ro=0,rc=0,left,right,i;
for(i=0;i<n;i++){
scanf("%d %d", &k, &l);
if(k==0){
lc++;
}
if(k==1){
lo++;
}
if(l==0){
rc++;
}
if(l==1){
ro++;
}
}
if(lc>lo){
left=lo;
}else{
left=lc;
}
if(rc>ro){
right=ro;
}else {
right=rc;
}
printf("%d",right+left);

return 0;
}