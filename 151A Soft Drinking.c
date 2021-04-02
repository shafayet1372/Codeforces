#include<stdio.h>

int main()
{
    int n,k,l,c,d,p,nl,np;
    scanf("%d %d %d %d %d %d %d %d", &n, &k, &l, &c, &d, &p, &nl, &np);
    int lime,drink,salt,i;
    int ar[3];
    
    drink=(k*l)/nl;
    
    ar[0]=drink;
    
    lime=c*d;
    ar[1]=lime;
    salt=p/np;
    ar[2]=salt;
    int min=ar[0];
    for(i =0;i<3;i++){
    if(ar[i]<min){
    min=ar[i];
    }
    }
    
    printf("%d",min/n);
    
    return 0;
} 