#include<stdio.h>

int main()
{
int n,p,l,m,count,count1=0,i;

scanf("%d",&n);
for(i =0;i<n;i++){
count=0;
scanf("%d %d %d", &p, &l, &m);
if(p==1){
count++;
}
if(l==1){
count++;
}
if(m==1){
count++;
}
if(count>=2){
count1++;
}
}
printf("%d",count1);
    return 0;
} 