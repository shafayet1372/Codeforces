#include<stdio.h>

int main()
{
int m;
scanf("%d",&m);
int n,i;
for(i=0;i<m;i++){
scanf("%d",&n);
if(360%(180-n)==0){
printf("YES\n");
}else{
printf("NO\n");
}
}
    return 0;
}