//Loops in javascript
function sayHi() {
   console.log('Hi!');
}

var count = 5;
for (var i = 0; i < count; i++) {
   sayHi();
}

for (i = 0; i < count; i++) {
   if (i == 3) {
      break;
   } else {
      sayHi();
   }
}

for (i = 0; i < count; i++) {
   if (i == 3) {
      continue;
   } else {
      sayHi();
   }
}

for (i = 10; i > 0; i--) {
  sayHi();
}

var j = 0;
for (;j < count;) {
  sayHi();
   j++;
}

for (var k = 'a'; k != 'aaaaa'; k+='a') {
   sayHi();
}

i = 0;
while (i < count) {
   sayHi();
   i++;
}