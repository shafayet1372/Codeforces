
var n=parseInt(readline());
var divi=readline().split(" ");
var m=parseInt(readline());
var divn=readline().split(" ");
var re=[];
for(var i=0;i<n;i++){
	
	
	for(var j=0;j<m;j++){
		if(divi[i]%2==0 && divn[j]%2==1){
			continue;
		}else{
			var result=divn[j]/divi[i];
			result=(result*10)%10;
			if(result==0){
				re.push(divn[j]/divi[i]);
			}
		}
		
	}
}
re.sort(function(a,b){
	return a-b;
});
var count=0;
var last=re[re.length-1];
for(var i=0;i<re.length ;i++){
	if(last==re[i]){
		count++;
	}
}
print(count);