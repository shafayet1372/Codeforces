
var t=readline();
t=t.toLowerCase();

var result=[];
for(var i=0;i<t.length ;i++){
	
	if(t[i]=="a" || t[i]=="o" || t[i]=="y" || t[i]=="e" || t[i]=="u" || t[i]=="i"){
		
		continue;
	}else{
		result.push(".");
		result.push(t[i]);
	}
}
print(result.join(""));