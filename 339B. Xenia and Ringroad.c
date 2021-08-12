#include<stdio.h>

int main()
{
long long int n,x,i,y,result,j;
scanf("%lld %lld",&n,&x);
long long int ar[x];
for(i=0;i<x;i++){
scanf("%lld",&ar[i]);
}
long  long int re=ar[0]-1;
for(i=0;i<x-1;i++){
if(ar[i]>ar[i+1]){
re=re+ar[i+1]+n-ar[i];
}else{
re=re+ar[i+1]-ar[i];
}
}
printf("%lld",re);
    return 0;
}