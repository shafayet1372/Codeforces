var n1=readline();
var x=parseInt(n1);
n1=n1.split("");
var count=0;
for(var i=0;i<n1.length ;i++){
	
	if(n1[i]=="4" || n1[i]=="7"){
		count++;
	}
}
if(count==n1.length){
	print("YES");
}else{
	if(parseInt(n1.join(""))%4==0 || parseInt(n1.join(""))%7==0 ||  parseInt(n1.join(""))%44 ==0 || parseInt(n1.join(""))%47 ==0 || parseInt(n1.join(""))%74==0 || parseInt(n1.join(""))%77==0){
		print("YES");
	}else{
		print("NO")
	}
}