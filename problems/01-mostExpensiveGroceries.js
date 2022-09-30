/***********************************************************************
You are compiling a price checker for a grocery store. The grocery 
prices are as follows:

butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5

First, create a function called costOfGroceries(groceries) which takes a 
single array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes 
in a 2-dimensional array of grocery items and returns the index of the 
sub-array with the highest cost.

This problem is worth 7 points. It is possible to get partial points on 
this problem.

Examples:
let groceriesA = ['cheese', 'butter', 'eggs'];
let groceriesB = ['eggs', 'milk', 'bread', 'bread'];
let groceriesC = ['cheese', 'bread'];
let groceriesD = ['eggs', 'butter'];

console.log(costOfGroceries(groceriesA));  // 8
console.log(costOfGroceries(groceriesB));  // 13
console.log(costOfGroceries(groceriesC));  // 9
console.log(costOfGroceries(groceriesD));  // 3

console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD])) // 1 
console.log(mostExpensiveGroceries([groceriesA, groceriesD])) // 0 
console.log(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC])) // 2 

************************************************************************/

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    // Your code here
    
}


function mostExpensiveGroceries(groceriesList) {
    // Your code here
    
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = {costOfGroceries, mostExpensiveGroceries};
  } catch (e) {
    module.exports = null;
  }