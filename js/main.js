//объект Math
console.log(Math.E);
console.log(Math.PI);

//.abs
console.log(Math.abs('-5'));     // 5
console.log(Math.abs(-9));       // 9
console.log(Math.abs(null));     // 0
console.log(Math.abs('string')); // NaN
console.log(Math.abs());         // NaN

//.ceil
console.log(Math.ceil(2));       // 2
console.log(Math.ceil(2.4));     // 3

//.floor
console.log(Math.floor(3));      // 3
console.log(Math.floor(3.7));    // 3

//.random
console.log(Math.random());
console.log(Math.round(Math.random() * 10));

//.sign
console.log(Math.sign(-5));      // -1
console.log(Math.sign(4));       // 1