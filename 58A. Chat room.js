
var t=readline();
t=t.split("");

var cmp=["h","e","l","l","o"];
var count=0;
for(var i=0;i<cmp.length ;i++){
	
	for(j=0;j<t.length;j++){
		if(cmp[i]==t[j]){
			t.splice(0,j+1);
			count++;
			break;
		}
	}
	
}
if(count==5){
	print("YES");
}else{
	print("NO");
	
}

