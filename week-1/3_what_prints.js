// What prints if you run this?


function test() {
  console.log(a)
  console.log(foo())

  var a = 1
  function foo() {
    return 2
  }
}         

//test()

// we'll get undefined for console.log(a)
// 2 will print out for console.log(foo())


//What will be printed out here:

function test2() {
  console.log(a)
  console.log(foo())

  var a = 1
  var foo = function() {
    return 2
  }
}         

test2()

// here, foo is a function expression and does NOT get hoisted
  // console.log(a) will be underfined
  // console.log(foo()) will be:  foo is not a function


// Suppose we do not call foo in line 24.  That is, what if line 24 reads like this:
// console.log(foo)

// In this case, foo will be undefined