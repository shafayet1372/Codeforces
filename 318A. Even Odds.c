#include<stdio.h>

int main()
{
long long int n,i,x,re;
scanf("%lld %lld",&n,&x);

if(n%2==1){
re=(n/2)+1;
}else{
re=n/2;
}
if(x<=re){
i=2*x-1;
}else{
i=(x-re)*2;
}
printf("%lld",i);
    return 0;
} 