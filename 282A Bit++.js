var t=parseInt(readline());
var s=0;
for(var i=0;i<t;i++){
	var t1=readline();
	if(t1=="X++" || t1=="++X"){
		s++;
	}else {
		s--;
	}
	
}

print(s);