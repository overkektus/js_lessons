//Objects
var user1 = {
   name: 'Vlad',
   login: 'myLogin',
   password: 'pass',
   age: 22,
   logIn: function() {
      console.log(this.name + ' has logged in! Hi!');
   },
   logOut: function() {
      console.log(this.name + ' has logged out! Bye!');
   }
};

user1.logIn();
user1.logOut();
console.log(user1.login);

console.log(user1['name']);
user1['logIn']();

console.log(user1);
user1.firstName = 'Vlad firstName';
console.log(user1.firstName);

delete user1.firstName;
console.log(user1.firstName);