
var t=readline();

var p=parseInt(++t);
p=p.toString();

while(1){
	
	var s=p;
	p=[...new Set(p)];
	
	if(p.length==4){
		break;
	}else{
		p=parseInt(++s);
		p=p.toString();
	}
	
	
	
	
}

print(p.join(""));