//Conditional operators
//if....else
var a = 2;
if (a != 2) {
   console.log('a != 2');
} else if (a < 2) {
   console.log('a < 2');
} else if (a > 2) {
   console.log('a > 2');
} else {
   console.log('a == 2');
}

console.log('-------');

//switch
a = 5;
switch(a) {
   case 1: console.log('a == 1');
      break;
   case 2: console.log('a == 2');
      break;
   case 3: console.log('a == 3');
      break;
   default: console.log('default');
      break;
}

console.log('-------');
// ? :
(a > 2) ? console.log('a > 2') : console.log('a <= 2');