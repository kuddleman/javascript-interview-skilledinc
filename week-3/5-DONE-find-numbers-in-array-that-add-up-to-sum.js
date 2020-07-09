// Given two pieces of information: 
// an array of numbers and another number 
// representing a sum, find if there is a pair of numbers 
// in the array that add up to the given sum.

// If there is at least one pair return the pair of numbers,
// If not return false.

// Try to find the most optimal solution 
// Hint: this can be solved in linear time.


function isSumPresent(input, sum) {
  
  const sortedArr = input.sort(( a, b ) => a - b)
  console.log(sortedArr)

  let start = 0;
  let end = sortedArr.length- 1

  while (start <= end) {
    let tempSum = sortedArr[ start ] + sortedArr[ end ]

    if ( tempSum === sum ) {
      return `Found a pair! They are ${ sortedArr[ start ]} and ${ sortedArr[ end ]}`
    } else if ( tempSum > sum ) {
      end --
    } else {
      start ++
    }
  }
  return false
}

// Test cases


//console.log(isSumPresent([1, 8, 23, 3, 7, 9], 8))// return [1,7]  (b/c 1 and 7 add up to 8)

//isSumPresent([1, 8, 23, 3, 7, 9], 11) // return [8,3] (b/c 8 and 3 add up to 11)

console.log(isSumPresent([1, 8, 23, 3, 7, 9], 19)) // false (b/c no two numbers add up to 19)