function largestPrimeFactor(number) {
var i = 2;
while (i <= number) {
    if (number % i == 0) {
        number = number / i;    
    } else {
        i++;
    }
}
console.log(i);
}
var a = 600851475143; 
largestPrimeFactor(a);