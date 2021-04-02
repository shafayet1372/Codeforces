#include<stdio.h>

int main()
{
int n;
scanf("%d",&n);
char s[n];
scanf("%s",s);
int i,count=0;
for( i=0;i<n;i++){
	if(s[i]==s[i+1]){

		count++;
 
		}

}

printf("%d",count);


return 0;
}