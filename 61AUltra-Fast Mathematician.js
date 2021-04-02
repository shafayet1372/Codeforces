var t=readline();
t=t.split("");
d=readline();
d=d.split("");
var result=[];
for(var i=0;i<d.length;i++){
	if(t[i]=="1" && d[i]=="1"){
		result.push("0");
	}else if(t[i]=="0" && d[i]=="0"){
		result.push("0");
	}else{
	result.push("1");
}
	
	
}
print(result.join(""));