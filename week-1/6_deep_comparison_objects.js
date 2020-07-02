/*
Implement your own deep comparison function for objects
Limit objects to contain only numbers as properties
Hint: use Object.keys( ) method

One level deep is ok
*/

const myObj1 = { a:1, b:2, c:3, d:4 }
const myObj2 = { b:2, a:1, d:4, c:3 }
const myObj3 = { a:1, b:2 }
const myObj4 = { z:6, y:7, a:1, b:2 }

const compareTwoObjects = ( obj1, obj2 ) => {
  if ( Object.keys( obj1 ) !== Object.keys( obj2 ) ) return false

  for ( let key in obj ) {
    // check is the value in obj2 is undefined  
      // in the case where the corresponding value in obj1 is also undefined
      // it will come up true now.  Otherwise, you'd get a bad false reading
    if ( !obj2[key] || obj2[key] !== obj1[key] ) {
      return false
    }
  }
  return true
}



