// Date object
console.log(new Date());
var birthday = new Date("June 16 1993");
console.log(birthday);
var birthday2 = new Date(1993, 5, 16, 22);
console.log(birthday2);

// .now
console.log(Date.now());

// .parse
console.log(Date.parse("Wed Jun 16 1968"));

// .UTC
var birthday3 = new Date(Date.UTC(1993, 5, 16, 22));
console.log(birthday3);

var dateAlert = "Today is " + birthday.getDay() + " " + birthday.getFullYear()+" and month is " + (birthday.getMonth() + 1);
console.log(dateAlert);