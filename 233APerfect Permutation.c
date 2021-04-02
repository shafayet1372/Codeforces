#include<stdio.h>

int main()
{
int n;
scanf("%d",&n);
if(n%2==1){
printf("%d",-1);
}else {
int ar[n];
int k=n-1;
int i,result;
for(i=0;i<n;i++){
 result=n-k;
if(result%2==1){
ar[i+1]=result;
}else{
ar[i-1]=result ;
}
k--;

}
for(i=0;i<n;i++){
printf("%d",ar[i]);
printf(" ");
}}
return 0;
}