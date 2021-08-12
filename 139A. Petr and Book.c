#include<stdio.h>

int main()
{
int n,i;
scanf("%d",&n);
int ar[7];
for(i=0;i<7;i++){

scanf("%d",&ar[i]);
}
int k=0,sum=0,l=1;
while(l!=-1){
sum=sum+ar[k];


if(sum>=n){
break;
}
if(k==6){
k=-1;
}
k++;

}
printf("%d",k+1);
    return 0;
} 