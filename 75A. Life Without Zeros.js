var n1=readline();
var n2=readline();
var sum=parseInt(n1)+parseInt(n2);
sum=sum.toString();

var ar=[];
ar.push(n1);
ar.push(n2);
ar.push(sum);
var newar=[];
for(var i=0;i<ar.length ;i++){
	var s=ar[i].split("");
	for(var k=0;k<s.length;k++){
		if(s[k]=="0"){
			s.splice(k,1);
			k=k-1;
		}
	}

	newar.push(s.join(""));
}

var sum2=newar[newar.length-1];
if(parseInt(newar[0])+parseInt(newar[1])==parseInt(sum2)){
	print("YES");
}else{
	print("NO");
}


