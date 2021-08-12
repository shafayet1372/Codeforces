
var t=parseInt(readline());
var re=[];
for(var i=0;i<t;i++){
	re.push(readline());
	
}
var fs=re[0];
var count=0;
var count2=0;
var w,c;
for(var i=0;i<re.length;i++){
	if(fs==re[i]){
		count++;
		w=re[i];
	}else {
		count2++;
		c=re[i];
	}
}

if(count>count2){
	print(w);
}else {
	print(c);
}
