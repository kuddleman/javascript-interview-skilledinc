// Create a function "majority" that accepts an array and a callback. 
// The callback will take a parameter and will return either true or false.
// "majority" will iterate through the array and perform the callback 
// on each element until it can be determined if the majority of 
// values from the callback are true. If the number of true returns is equal 
// to the number of false returns, majority should return false.

function majority(inputArray, callback) {
 // your code here
 let truthyCounter = 0

 for (let num of inputArray) {
   let bool = callback(num)
   if (bool) {
     truthyCounter ++
   }
 }
    if (Math.ceil(inputArray.length / 2) < truthyCounter) {
      return true
    }
    return false
}

// testing setup
const input = [2, 3, 19, 13, 1, 55];


console.log(majority(input, elem => elem > 2)); // true
console.log(majority(input, elem => elem > 10)); // false
console.log(majority(input, elem => elem > 50)); // false