var s=parseInt(readline());

for(var i=0;i<s;i++){
	
var t=readline();
if(t.length <=10){
	
	print(t);
}else{
	var f=t[0];
	var l=t[t.length -1];
	var g=t.length-2;
	print(f+g+l);
	
}
}

