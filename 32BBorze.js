
"use strict"; process.stdin.resume(); process.stdin.setEncoding("utf-8"); function print(x) { console.log(x); } let inputString = ""; let currentLine = 0; process.stdin.on("data", (inputStdin) => { inputString += inputStdin; }); process.stdin.on("end", () => { inputString = inputString.split("\n"); main(); }); function readline() { return inputString[currentLine++]; }  function main() { 
	
var s=readline();

var str="";
for(let i=0;i<s.length -1;i++){
	
		if(s[i]=="-"&&s[i+1]==".")
		{
		str=str+"1";
		i=i+1;
	}else	 if(s[i]=="-" && s[i+1]=="-")
	{
		str=str+"2";
		i=i+1;
	}else
	{
		str=str+"0";
		
	}

}
print(str);

	} 

	
	
