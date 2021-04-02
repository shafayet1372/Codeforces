var s1=readline();
var s2=readline();
var a=readline();
var ar=[];
ar.push(s1);
ar.push(s2);


var count=0;
a=a.split("");
for(var i=0;i<2;i++){
	for(var k=0;k<ar[i].length;k++){
	  for(var m=0;m<a.length;m++){
	  	if(ar[i][k]==a[m]){
	  		count++;
	  		a.splice(m,1);
	  		
	  		break;
	  	}
	  }
	}
	
}

if((s1.length+s2.length)==count){
	if(a.length>0){
		print("NO");
	}else {
		print("YES");
	}
	
}else{
	print("NO");
}
