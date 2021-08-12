#include<stdio.h>

int main()
{
long long int n,i;
scanf("%lld",&n);
long long int ar[n];
long long int big=5000000000000;
long long int count=0,index;
for(i=0;i<n;i++){

scanf("%lld",&ar[i]);
if(ar[i]<big){
big=ar[i];
index=i;
}

}
for(i=0;i<n;i++){
if(ar[i]==big){
count++;
}
}
if(count>1){
printf("Still Rozdil");
}else{
printf("%lld",index+1);
}
    return 0;
} 