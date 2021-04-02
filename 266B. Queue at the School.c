#include<stdio.h>

int main()
{

int n,x;
scanf("%d %d",&n,&x);
char c[n];
scanf("%s",c);
int i=0,j;

for(i ;i<x;i++){
for(j=0;j<n-1;j++){
 if(c[j]=='B' && c[j+1]=='G'){
 c[j]='G';
c[j+1]='B';
j=j+1;
}
}
}
for(i=0;i<n;i++){
printf("%c",c[i]);}
return 0;
}