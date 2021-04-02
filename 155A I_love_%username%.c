#include<stdio.h>

int main()
{
int low,high,count,n,amz=0;

scanf("%d",&n);
int ar[n],i,j;
for(i=0;i<n;i++){
scanf("%d",&ar[i]);

}
for(i=1;i<n;i++){
high=0;
low=0;

for(j=0;j<i;j++){
 if(ar[i]>ar[j]){
 high++;
}
if(ar[i]<ar[j]){
low++;
}
}
if(high==i){

amz++;


}
if(low==i){

amz++;

}
}
printf("%d",amz);
return 0;
}