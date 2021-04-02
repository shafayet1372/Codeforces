var t=readline();

var t1=readline();
var count=0;
for(var i=0;i<t.length ;i++){
	if(t[i].toLowerCase()!=t1[i].toLowerCase()){
		 if(t.toLowerCase().charCodeAt(i) >t1.toLowerCase().charCodeAt(i)){
		 	print(1);
		 	
		 }else{
		 	print(-1);
		 }
		
		break;
	}else {
		count++;
	}
	
}
if(count==t.length ){
	print(0);
}