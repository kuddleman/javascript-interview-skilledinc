// Balanced Parentheses 
// Write a balancedParenthesis function that 
// takes a string as input and returns a boolean — 
// if the parentheses in the input string are ‘balanced’, 
// then return true, else return false. 

//https://www.youtube.com/watch?v=lOIu7k1K5J0

// https://www.youtube.com/watch?v=xY65bgfXJTk

const isOpen = {
    "{": true,
    "(": true,
    "{": true
}

const isClosed = {
    "}": "{",
    "]": "[",
    ")": "("
}

function balancedParenthesis( str ) {
    // your code here
    if ( str.length % 2 !== 0 ) {
        return false
    }
    const stack = []
    
    let i = 0
    while( i < str.length ){
      if ( isOpen[ str[i] ] ) {
        stack.push( str[i] )
      } else if ( isClosed[ str[i] ] ) {
         let corres = isClosed[ str[i] ]
         if ( corres !== stack.pop()) {
            return false
         } 
      }
      i++
    }
   
    if ( stack.length > 0 ) {
        
        return false
    } else {
        return true
    }
    
}

// test cases

/*
balancedParenthesis('[()]’) => true
balancedParenthesis('[()]{}{[()()]()}’) => true
balancedParenthesis('[()]{’) => false
balancedParenthesis('[(])’) => false
*/
let myString = "()"

console.log(balancedParenthesis(myString) )
