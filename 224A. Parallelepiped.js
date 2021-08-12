var t=readline();
t=t.split(" ");
var s1=parseInt(t[0]);
var s2=parseInt(t[1]);
var s3=parseInt(t[2]);
var a = Math.sqrt(s1 * s2 / s3); 

var b = Math.sqrt(s3 * s1 / s2); 

var c = Math.sqrt(s3 * s2 / s1)

var sum=a+b+c;
print(4*sum);