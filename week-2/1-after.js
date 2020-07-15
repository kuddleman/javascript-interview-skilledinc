//Implement function "after" that takes the number of times 
  //the callback can be executed as the first parameter and the 
  //callback function as the second parameter.

// function after(timesToCall, callback) {
//   // write your code here
//   let counter = 0
//   if (counter < timesToCall ) {
//     counter++
//     console.log(`Counter is: ${counter}`)
//     return callback
//   }
//    console.log('we are done!')
// }


// solution:

const after = ( timesToCall, callback ) =>{

  let counter = 0

  return () => {
    if ( counter < timesToCall ) {
      counter++
      callback()
    }
  }
}

// test setup
const myAfterFunc = after(3, () => console.log('test'));



// console.log(myAfterFunc())
// console.log(myAfterFunc())
// console.log(myAfterFunc())
// console.log(myAfterFunc())
myAfterFunc(); // prints test
 myAfterFunc(); // prints test
myAfterFunc(); // prints test
 myAfterFunc(); // nothing is printed