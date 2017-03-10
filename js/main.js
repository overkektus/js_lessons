//Arrays
var fruits = ['apple', 'lemon', 'orange'];
//var fruits2 = new Array('apple2', 'orange2');
//console.log(fruits2.length);

console.log(fruits.length);
fruits[3] = 'pineapple';
console.log(fruits.length);
console.log(fruits[3]);

fruits.push(4);
console.log(fruits);

var fruits = ['apple', 'lemon', 'orange'];
for (var i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
   fruits[i] = '2';
}

console.log(fruits.length);
console.log(fruits);
fruits[20] = 'another element';
console.log(fruits);
console.log(fruits.length);