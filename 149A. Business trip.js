var t=parseInt(readline());
var s=readline();

if(t==0){
	print(0);
}else{
	
s=s.split(" ").sort(function(a,b){
	return b-a;
})
var count=0;
var sum=0;
for(var i=0;i<s.length;i++){
	sum=sum+parseInt(s[i]);
	count++;
	
	if(sum>=t){
		break;
	}
}
if(sum<t){
	print(-1);
}else{
print(count);
}
}
