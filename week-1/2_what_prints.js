// What will be printed if you run the following code?
// How would you fix it to work correctly ( add 2 to x and print it )

var x = 21

function addTwo() {
  console.log(x)
  var x = x + 2
}

//addTwo()

// as is above, we'll get underfined because var x (from var x = x + 2)
  // will be hoisted


// TO fix:  reverse lines 7 and 8; remove 'var' keyword.
// Now, addTwoV2 will find y by taking it from the global scope. It's also
// an impure function 

  var y = 21

function addTwoV2() {
  y = y + 2
  console.log(y)
  
}

//addTwoV2()


// What about this:

var z = 21

function addTwoV3() {
  var z = z + 2
  console.log(z)
}

addTwoV3()  // this will be NaN
// Here's what happens:
   // 1.  var z gets hoisted to the top of the function and is assigned "undefined"
   // 2.  JS will then try to evaluate var z = z + 2.   Var z is  undefined.  When
   // JS trys to add 2 to undefined, it gets Not a number or NaN

   