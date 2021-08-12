var t=readline();
var l=readline();
t=t.split("");
l=l.split("");
for(var i=0;i<t.length;i++){
	if(t[i]!=l[i]){
		for(j=i;j<t.length;j++){
			if(t[j]==l[i] && l[j]==t[i]){
				t[i]=t[j];
				t[j]=l[j];
			var brk=1;
				break;
				
			}
			
		}
		
	}
	if(brk==1){
		break;
	}
}
if(t.join("")==l.join("")){
	print("YES");
}else{
	print("NO");
}