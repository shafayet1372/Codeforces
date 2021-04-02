#include<stdio.h>

int main()
{
int brk=0,i,j;
 char s[3]={'H','Q','9'};
  char user_input[255];

    fgets(user_input, 255, stdin);
    
    
  for(i=0;i<3;i++){
 for(j=0;j<sizeof(user_input)/1;j++)
{
if(s[i]==user_input[j]){
brk=1;
break;
}
}
if(brk){
break;
}
}

if(brk){
printf("YES");
}else {
printf("NO");
}
    return 0;
} 