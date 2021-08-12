
var t=readline();

t=t.split(" ").sort();
var count=0;
for(var i=0;i<t.length-1;i++){
	
	if(t[i]==t[i+1]){
		count++;
	}
}
print(count);