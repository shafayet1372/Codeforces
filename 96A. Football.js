
var t=readline();


var brk=0;

for(var i=0;i<t.length ;i++){
	 if(t[i]==0 && t[i+1]==0 && t[i+2]==0&& t[i+3]==0 && t[i+4]==0 && t[i+5]==0 && t[i+6]==0){
	 	brk=1;
	 	
	 	break;
	 	
	 }
	
if(t[i]==1&& t[i+1]==1 && t[i+2]==1 && t[i+3]==1 && t[i+4]==1 && t[i+5]==1 && t[i+6]==1){
	 	brk=1;
	 	break;
	 }
	



}
if(brk){
	print("YES");
}else{
	print("NO");
}

