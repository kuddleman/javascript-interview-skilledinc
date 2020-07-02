// Write a function that returns the factorial of a number. 
// A factorial of a number is the result of that number 
// multiplied by the number before it, and the number before 
// that number, and so on, until you reach 1. 
// The factorial of 1 is just 1.
// Example factorial of 4 is 4*3*2*1 = 24
// Please use a recursive function to solve this.

function factorial(num) {
    if ( num === 1 ) return 1

    return num * factorial( num - 1 )

} 

console.log(factorial(5))

// In an interview...talk about the discussion you'd want to have
  // about using recursive at all.  Using recursive will
  // place a strain on the memory.  Is using recursive a  good
  // trade off?
  
// This is not TCO  Tail Call Optimization

// Without TCO, the call stack just keeps growing.  
    //Possible stack overflow. Space time is O(n)
// With TCO, this does not happen. Space time is O(1)

// Tail call optimization means that it is possible to call a 
// function from another function without growing the call stack. 
// In order to understand the importance of that statement, 
// we have to talk about how the stack works.

// https://hackernoon.com/es6-tail-call-optimization-43f545d2f68b


// Requirements for Tail Call:

// A function is in the tail position when:
// 1. Strict Mode 
   //
// 2. Normal or Arrow Function 
// 3. NOT a generator function 
// 4. Returned value of function is returned by the calling function


// Downsides

// 1.  Harder to debug because you don't have the callstack to look at.
