var someStr = 'gmy string';
var someStr2= ' kek';
console.log('.charAt — ' + someStr.charAt(0));
console.log('.indexOf — ' + someStr.indexOf('str'));
console.log('.indexOf — ' + someStr.indexOf('gdk'));
console.log('.lastIndexOf — ' + someStr.lastIndexOf('g'));
console.log('.toUpperCase — ' + someStr.toUpperCase());
console.log('.charCodeAt — ' + someStr.charCodeAt(0));
console.log('.concat — ' + someStr.concat(someStr2));
console.log('');

var anotherStr = new String('my string');
console.log(anotherStr);
console.log(anotherStr.valueOf());

var someNum = 4.32;
console.log('.toFixed — ' + someNum.toFixed(1));
console.log('.toExponential — ' + someNum.toExponential());

//var anotherNum = new Number(4.32);

var someBool = true;
//var anotherBool = new Boolean(true);