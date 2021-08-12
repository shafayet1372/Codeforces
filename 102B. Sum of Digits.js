var t=readline();
if(t.length ==1){
	print(0);
}else{
var k=0;
while(1){
	k++;
	t=t.split("");
	sum=0;
	for(var i=0;i<t.length ;i++){
		sum=sum+parseInt(t[i]);
	}
	t=sum.toString();
if(sum.toString().length==1){
	break;
}
}
print(k);
}

