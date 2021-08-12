var d=readline();

var t=readline ();
t=t.split(" ");

var low=50000;
var s,e;
for(var i=0;i<t.length-1 ;i++){
	var result=t[i+1]-t[i];
	if(result<0){
		result=result*(-1);
	}
	if(result<low){
		low=result;
		s=i;
		e=i+1;
		
	}
	
}

result =t[t.length-1]-t[0];
if(result<0){
	result=result*(-1);
}
if(result<low){
	s=t.length;
	e=1;
}else{
	s=s+1;
	e=e+1;
}
print(s+" "+e)