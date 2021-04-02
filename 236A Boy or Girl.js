var s=readline();

var ar=[];
var count=0;
for(var i=0;i<s.length ;i++){
if(ar.length >0){
	if(ar.indexOf(s[i])<0){
		ar.push(s[i]);
	}
}else {
	ar.push(s[i]);

}
}
if(ar.length %2==0){
	print("CHAT WITH HER!");
}else {
	print("IGNORE HIM!");
}