var s=readline();




s=s.split("");
var re=[];
for(var i=0;i<s.length ;i++){
	
	if( s[i]=="W" && s[i+1]=="U" && s[i+2]=="B"){
		s.splice(i,3);
		if(i!=0){
			s.splice(i,0," ");
		}
		i=i-1;
	}
	
}

print(s.join(""));
