//Array Methods
var array = [1, 2, 3, 4, 5];
//Push
//array.push(6)

//Pop
//array.pop();

//Unshift
//array.unshift(0);

//Shift
//array.shift();

//Map
/*
var mapped = array.map(function(element, index) {
   return element + index;
});
console.log(array);
*/

//Filter
/*
var filtered = array.filter(function(element) {
   var result = (element > 2);
   return result;
});
*/

//Reduce
var reducedValue = array.reduce(function(acc, element, index) {
   return acc + element;
});
console.log(array);
console.log(reducedValue);