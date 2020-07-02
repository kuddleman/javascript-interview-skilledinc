// What's the difference between const, let and var?

/*
 They are looking for 2 areas:  SCOPE   and HOISTING

var is FUNCTIONALLY SCOPED

const and let are BLOCK SCOPED





*/

// difference in SCOPE

const test = () => {
  var a = 1
  let b = 2
  const c = 3

  if (true) {
    var d = 4
    let e = 5
    const f = 6
    console.log( a, b, c, d, e, f )// 1 2 3 4 5 6
  }

}

//test()

const test2 = () => {
  var a = 1
  let b = 2
  const c = 3

  if (true) {
    var d = 4
    let e = 5
    const f = 6
    
  }
  console.log( a, b, c, d, e, f )// e is not defined
}

//test2()
  


// DIFFERENCE IN HOISTING

/*
  var is hoisted, but not defined
  let/const are hoisted, but not initialized

*/

const test3 = () => {
  console.log(b)
  var a = 1
  let b = 2
  const c = 3
}

test3()

/*
In test3:
If we try to console.log a, we'll get undefined

If we try to console.log b, we'll get an error 'cannot access 'b' before initialization'
If we try to console.log c, we'll get an error 'cannot access 'c' before initialization'


*/