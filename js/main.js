//Arithmetic
console.log("Arithmetic");
var a = 1;
var b = 4;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(3 % 2);

a++;
console.log(a);
a--;
console.log(a);

b *= 2;
console.log(b);

//Logical
console.log("Logical");
console.log(a <= b);
var a = 4;
var b = '4';

console.log(a == b);
console.log(a !== b);
console.log(a === b);

console.log((2 > 1) || (3 < 2));

//String
console.log("String")
var newString = 'myString';
newString += ', hello!';
console.log(newString + a);

var c = (2 > 4) ? console.log('1st') : console.log('2d');