// Implement a function "pipe" that accepts an array of functions 
// and a number. pipe should input the number into the first function 
// in the array, and then use the output from that function as input for 
// the second function, and then use the output from that function as 
// input for the third function, and so forth, until we have an output 
// from the last function in the array. pipe should return the final output.



// const pipe = ( arrFuncs, initVal ) => {
//   arrFuncs.reduce(
//     ( res, oneFunc ) => oneFunc( res ),
//     initVal
//   )
// }

const pipe = ( arrFuncs, number ) => {

  let input = number

  for ( let i = 0; i < arrFuncs.length; i++ ) {
    input = arrFuncs[i]( input )
  }
   return input
}

// testing setup

const actions = [i => i + 10,
                 i => i * 2,
                 i => i - 5,
                 i => i * 3,
                ];


const result = pipe(actions, 2); 
console.log(result); // 57
