var num=readline();
var count=0;

for(var i=0;i<num.length ;i++){
	
	if(parseInt(num[i])==7  ||parseInt(num[i])==4){
		count++;
	}
	
}

if(count==7 || count==4){
print("YES");
}else 
{
	print("NO");
}
