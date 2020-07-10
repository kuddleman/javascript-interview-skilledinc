// Balanced Parentheses 
// Write a balancedParenthesis function that 
// takes a string as input and returns a boolean — 
// if the parentheses in the input string are ‘balanced’, 
// then return true, else return false. 

//https://www.youtube.com/watch?v=lOIu7k1K5J0

function balancedParenthesis(input) {
    // your code here
    const stack = []

    for ( let bracket of input ) {
       if ( bracket === '[' || bracket === '(' || bracket === '{' ) {
           stack.push( bracket )
       } 
    }
    console.log(stack)

}

// test cases

/*
balancedParenthesis('[()]’) => true
balancedParenthesis('[()]{}{[()()]()}’) => true
balancedParenthesis('[()]{’) => false
balancedParenthesis('[(])’) => false
*/

balancedParenthesis('[()]') 
