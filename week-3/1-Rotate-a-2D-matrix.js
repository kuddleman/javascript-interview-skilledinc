//Write a function to rotate a 2D square matrix 
//(nested array) counter-clockwise once. The solution should 
//support a square matrix of any size

//https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6

let matrix =   [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13,14, 15, 16]];

function rotate(matrix) {
    const newMatrix = [];
    
    // your code here

    return newMatrix;
}

const rotatedMatrix = rotate(matrix);
console.log(rotatedMatrix);


// should display
[
  [ 4, 8, 12, 16 ],
  [ 3, 7, 11, 15 ],
  [ 2, 6, 10, 14 ],
  [ 1, 5, 9, 13 ]
]