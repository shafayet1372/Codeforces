#include<stdio.h>

int main()
{
int i,n;
scanf("%d",&n);
double sum=0.0;
int ar[n];
for(i=0;i<n;i++){
 scanf("%d",&ar[i]);
 
}
for(i=0;i<n;i++){
sum=sum+ar[i];
}
sum=sum/n;
printf("%.12lf\n",sum);

return 0;
}