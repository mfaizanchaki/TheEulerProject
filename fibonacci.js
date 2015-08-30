var k;
var i=0,j=1,f;
var sum = 1;

for(k=2;k<4000000;k++){
   if(k%2===0){
     f=i+j;
     i=j;
     j=f;
     sum = sum + j;
   }
}    
console.log(sum);