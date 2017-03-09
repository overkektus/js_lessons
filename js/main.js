//Functions
//console.log('hello, world')

function sayHello() {
   console.log('hello, world');
}

sayHello();
sayHello();

var sayHi = function () {
   console.log('Hi');
};

sayHi();

var a = 1;
var b = 2;

function sum(x, y) {
   return x + y;
}

console.log(sum(a, b));
console.log(sum(5, 8));

var sayHi = function(name) {
   console.log('Hello, ' + name);
};

sayHi('Ilia');

function sayHello(name) {
   console.log('Another hello, ' + name);
}

sayHi('Vlad');
sayHello('Vlad');
