// Implement a function "rollCall" that accepts an array 
// of names and returns a function. The first time the returned function
//  is invoked, it should log the first name to the console. 
//  The second time it is invoked, it should log the second name 
//  to the console, and so on, until all names have been called. 
//  Once all names have been called, it should log ‘All present’.

function rollCall(namesArray) {
// write your code here
 let arrInx = 0

 function inner() {
   if ( arrInx < namesArray.length ) {
   console.log( namesArray[arrInx] )
   arrInx++
   } else {
     console.log('All present')
   }
 }
  return inner
}

// test setup
const myRollCall = rollCall(['John', 'Mary', 'Jane', 'David']);
myRollCall(); // prints John
myRollCall(); // prints Mary
myRollCall(); // prints Jane
myRollCall(); // prints David
myRollCall(); // All present
myRollCall(); // All present