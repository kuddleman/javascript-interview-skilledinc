/* Give an array of n + 1 numbers between 1 and n, find the duplicate.
There will only be one duplicate

For example, with an array of 5 numbers, it implies that each number will have a
value between 1 and 4 (inclusive).  This means there will automatically be at least one duplicate

Example:

Input: [ 1,2,2,3,4 ]
Output: 2

Input: [ 3,2,1,4,1 ]
Output: 1
*/


const findDuplicate = arr => {

  let duplicate = null

  for ( let i = 0; i < arr.length - 1; i++) {
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[i] === arr[j] ) {
        duplicate = arr[i]
      }
    }
  }
  if ( duplicate ) {
    return duplicate
  } else {
    return "No duplicate Found"
  }
}



// Second Solution:
 const findDuplicate2 = arr => {

  const myObj = {}

  for ( num of arr ) {
    if ( myObj[num] ){
      myObj[num] ++
    } else {
      myObj[num] = 1
    }  
  }
  for ( key in myObj ) {
    if (myObj[key] === 2) {
      return `Here is the duplicate: ${ key }`
    } 
  }
  return 'No duplicate found'
 }

 // Third solution

 const findDuplicate3 = arr => {
   const myObj = {}

   for ( num of arr ) {
     if ( myObj[num] === 'exists' ) {
       console.log(`Found it! This is the duplicate: ${ num }`)
     } else {
       myObj[num] = 'exists'
     }
   }
   console.log(`No duplicates found!`)
 }





const input1 = [ 1,2,2,3,4 ]
const input2 = [ 3,2,1,4,1 ]
const input3 = [ 1,2,3,4,5,6 ]

//console.log( findDuplicate(input3) )

//console.log(findDuplicate2( input3 ))

//findDuplicate3( input3 )

