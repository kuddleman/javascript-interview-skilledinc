// Write a function called ‘contains' that searches 
// for a value in a nested object. It returns true 
// if the object contains that value.
// Example:


const spaceXLaunch = {
  launch: {
    rocker: {
      stage: {
        core: {
          coreSerial: 'B1056',
          payload: 'CRS-17'
        }
      }
    }
  }
}

function contains(obj, value) {
 const vals = Object.values(obj)
 
 for ( let i = 0; i < vals.length; i++ ) {
   if ( vals[i] === value ) return true

   if ( typeof vals[i] === 'object' ) {
     let result = contains( vals[i], value )
     if ( result ) return true
   }
 }
 return false
}

console.log(contains(spaceXLaunch, 'B1056')); //true
console.log(contains(spaceXLaunch, 'CRS-17')); //true
console.log(contains(spaceXLaunch, 'abc')); //false


