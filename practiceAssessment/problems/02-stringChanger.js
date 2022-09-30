/***********************************************************************
Build a function called stringChanger() that takes in two arguments: a 
word and an operation. Based on the operation, your function will return 
the word modified in some way. The operations are:

"capitalize": Capitalize the first letter in the word.

"uppercase": Capitalize every letter in the word.

"double": Return the word twice in a row.

"reverse": Return the string with the letters in reverse order.

If the operation is invalid, return the word, unchanged.

This problem is worth 5 points. It is possible to get partial points on 
this problem.

Examples:
console.log(stringChanger("foo", "capitalize")) // "Foo"
console.log(stringChanger("foo", "uppercase")) // "FOO"
console.log(stringChanger("foo", "double")) // "foofoo"
console.log(stringChanger("foo", "reverse")) // "oof"
console.log(stringChanger("foo", "unknown")) // "foo"
************************************************************************/

function stringChanger(word, operation) {
  // Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = stringChanger;
} catch (e) {
  module.exports = null;
}