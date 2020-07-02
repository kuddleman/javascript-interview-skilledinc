/* Implement you own deep comparison function for arrays. 
  The array will only contain numbers or strings
  Return value is a boolean


*/

const compareArrays = ( arr1, arr2 ) => {

  if ( arr1.length !== arr2.length ) return false
  
  for ( let i = 0; i < arr1.length; i++ ) {
    if ( arr1[i] !== arr2[i] ) return false
  }
  return true
}


// alternative solution using the every method:

const compareArrays2 = ( arr1, arr2 ) => {

  if ( arr1.length !== arr2.length ) return false
  
  return arr1.every(( element,index ) => element === arr2[ index ])
}

// JSON alternative;

const compareArrays3 = ( arr1, arr2 ) => {
  return ( JSON.stringify(arr1) === JSON.stringify(arr2) )
}


// compare nested arrays:
// One way is to use the JSON method

const compareNestedArr = ( arr1, arr2 ) => {
  if ( arr1.length !== arr2.length ) return false

  for ( let i = 0; i < arr1.length; i++ ) {
    if ( Array.isArray( arr1[i] ) && Array.isArray( arr2[i] ) ){
      if ( !compareNestedArr( arr1[i], arr2[i] ) ) return false
    } else if ( arr1[i] === arr2[i] ) {
      return false
    }
  }
  return true
}



