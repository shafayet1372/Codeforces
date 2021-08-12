#include<stdio.h>

int main()
{
long long n,qn,i,j;
long long int f=0,l=0;
scanf("%lld",&n);
long long int ar[n],ar2[n+1];
for(i=0;i<n;i++){
 scanf("%lldd",&ar[i]);
ar2[ar[i]]=i+1;
}

scanf("%lld",&qn);
for(i=0;i<qn;i++){
scanf("%lld",&j);
f=f+ar2[j];
l=l+((n+1)-ar2[j]);


}
printf("%lld %lld",f,l);
    return 0;
} 