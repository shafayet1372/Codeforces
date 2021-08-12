var t=readline().split(" ");
var x=parseInt (t[1]);
var n=readline();





 n=n.split(" ");

n.sort(function(a,b){
	return a-b;
})

var result=0;

for(var i=0;i<n.length ;i++){
	if(i==x){
		break;
	}
	if(n[i]<0){
		result =result+parseInt(n[i]);
	}
}
print(result*(-1));