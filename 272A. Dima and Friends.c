#include<stdio.h>

int main()
{
int x,n,i,sum=0,k=0;
scanf("%d",&x);
int ar[x];
for(i=0;i<x;i++){
 scanf("%d",&ar[i]);
 sum=sum+ar[i];
}
int j=sum;
int h[5];
for(i=1;i<=5;i++){
 sum=sum+i;
 if(sum%(x+1)!=1){
  h[k]=i;
k++;

}
sum=j;
}



printf("%d",k);

    return 0;
} 