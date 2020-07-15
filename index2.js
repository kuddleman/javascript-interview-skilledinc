// given an array of integers
// all are positive

//construct a triangle from values in that array.
// return perimeter of largest triangle.

/*

[ 2, 1, 2 ]       //return   5

[ 2,1,1 ]    // 0    a + b > c

[ 3,2,3,4 ]  // return 10

[ 3,6,2,3 ]   // 3 + 2 + 3  return 8

 I can use sort

 [ 10,4,3,2 ]

*/


//sort the array in descending order

// save the last element or largest of the array to a variable

// go through the rest of the array to see if the NEXT TWO add up to more than largest

// if not, we'll go to the next smallest and repeat

const largestTriangle = array => {

  let sortedArray = array.sort descending order

  interate until the 3rd from the end {
   
    if ( arr[i] > arr[i + 1] + arr[ i + 2 ]) {
      return  arr[i] + arr[i + 1] + arr[ i + 2 ]
    } 
  }

  return 0
}



