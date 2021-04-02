#include<stdio.h>

int main()
{
int ar[5][5];
 
 int row,col,point =3,i,j;
 
 for(i=0;i<5;i++){
    for(j=0;j<5;j++){
     scanf("%d",&ar[i][j]);
     if(ar[i][j]==1){
    row=i+1;
    col=j+1;
    }
     }
    
    }
 row=point-row;
col=point-col;
    if(row<0){
    row =row*(-1);
    }
    if(col<0){
    col=col*(-1);
    }
    
    printf("%d",row+col);
    return 0;
}