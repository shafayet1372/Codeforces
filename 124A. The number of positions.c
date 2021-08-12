#include<stdio.h>

int main()
{
int n,x,y,count=0,i;
scanf("%d %d %d",&n,&x,&y);
for(i=x+1;i<=n;i++){
if((n-i)<=y){
count++;
}

}
printf("%d",count);
    return 0;
} 