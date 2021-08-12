var t=readline();
var child=readline();



child=child.split(" ");

var len=parseInt(t.split(" ")[0]);
var cand=parseInt(t.split(" ")[1]);

var results=[];

for(var i=0;i<100;i++){
	
for(var j=0;j<len;j++){
	
	if(child[j]>cand){
		child[j]=child[j]-cand;
		results.push(j+1);
	}
}

}
if(results.length>0){
	print(results[results.length-1]);
}else{
	print(len);
}