"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********
function main() {
  let s=readline();
let low=0;
let up=0;
for(let i=0;i<s.length ;i++){
	
	if(s[i]==s[i].toLowerCase()){
		low++;
	}
	 if(s[i]==s[i].toUpperCase()){
		up++;
	}
}

if(low>up)
{
	print(s.toLowerCase());
}else 	if(up>low)
{
	print(s.toUpperCase());
  }else{
	print(s.toLowerCase());
	
}
}