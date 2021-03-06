// Implement a function "makeHistory" that returns a function (that will accept a string). 
// The returned function will save a history of strings passed into the returned function 
// (one per invocation only). Every time a string is passed into the function, the function 
// should return that same string with the word 'done' after it. However, if the string 'undo' 
// is passed into the function, then the function should delete the last action saved in 
// the history, and return that deleted string with the word 'undone' after. 
// If 'undo' is passed into the function and the function's history is empty, then the 
// function should return the string 'nothing to undo'.

const makeHistory = () => {
  const history = []

  return (action) => {
    if ( action === 'undo' ) {
      if (history.length === 0) {
        return history.pop + ' - undone'
      } else {
        return 'history is empty'
      }
    } else {
      history.push( action )
      return action + '- done'
    }
  }
    
  }
 


const myMakeHistory = makeHistory()

myMakeHistory('hello')
myMakeHistory('goodbye')
myMakeHistory('Waify')
myMakeHistory('undo')
myMakeHistory('undo')
myMakeHistory('undo')
myMakeHistory('undo')