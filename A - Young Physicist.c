#include<stdio.h>

int main()
{
int n;
 scanf("%d",&n);
 int sum=0;
 int i,j,input,x,y,z,x1=0,y1=0,z1=0;
 for(i=0;i<n;i++){
    for(j=0;j<1;j++){
     scanf("%d %d %d",&x,&y,&z);
     x1=x1+x;
     y1=y1+y;
    z1=z1+z;
    }
    
}
if(x1 ==0 && y1==0 && z1==0){
printf("YES");
}else {
printf("NO");
}
    
    return 0;
}