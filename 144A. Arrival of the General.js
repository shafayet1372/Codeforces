
var s=readline();
var t=readline();
var m=t;
m=m.split(" ");
t=t.split(" ").sort((a,b)=>{
	return a-b;
});
low=t[0];
high=t[t.length-1];



	for(var i=0,j=t.length-1;i<t.length,j>=0;i++,j--){

		if(m[i]==low){
			lows=i;
			
		}
		if(m[j]==high){
			highs=j;
		}
	  
	  }
	 
	  if(lows>highs){
		  lows=(t.length)-(lows+1);
		   
	  }else{
		   lows=t.length-(lows+1);
		   highs=highs-1;
	  }
	  
	  print(highs+lows);

