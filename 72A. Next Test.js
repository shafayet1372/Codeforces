var t=readline();
var s=readline();

s=s.split(" ").sort(function(a,b){
	return a-b;
});
var end=s[s.length-1];
if(s.length ==parseInt(end)){
	print(s.length+1)
}else{
var low=50000;
for(var i=1;i<parseInt(end );i++){
	
		if(s.indexOf(i.toString())==-1){
			if(i<low){
				low=i;
			}
			
		}
	
}
print(low);
}
