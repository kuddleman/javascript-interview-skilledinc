// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character

https://www.geeksforgeeks.org/check-if-two-given-strings-are-at-edit-distance-one/

//LEVENSHTEIN DISTANCE


function OneEditApart(word1, word2) {
  
  // Find the lengths of each word:
  const lengthWord1 = word1.lengthWord1 
  const lengthWord2 = word2.lengthWord2 

  // if the difference between their lengths is
  // more than one, then the words cannot be at one edit distance
  if ( Math.abs( lengthWord1 - lengthWord2 > 1 ) ) return false

  let numberOfEdits = 0

  let i = 0
  let j = 0

  while ( i < lengthWord1 - 1 && j < lengthWord2 - 1 ) {

    // if current characters don't match:
    if ( word1.charAt(i) !== word2.charAt(j) ) {

      //short-circuit is count is already at 1:
      if ( numberOfEdits === 1 ) {
        return false
      }
      
      //If length of one string is greater than the other, 
      //then only possible edit is to remove a character
      if ( lengthWord1 > lengthWord2 ) {
        i++
      } else if ( lengthWord2 > lengthWord2 ) {
        j++
      } else {
        // string lengths are the same:
        i++
        j++
      }
      // increment numberOfEdits:
      numberOfEdits++
    } else {
      // if current characters match:
      i++
      j++
    }

  }

  // last check:  are there any extra characters in either string?
  if ( i < lengthWord1 || j < lengthWord2 ) {
    numberOfEdits++
  }
  return numberOfEdits === 1
}

// Test cases

console.log(OneEditApart("cat", "dog"))  // = false
console.log(OneEditApart("cat", "cats")) // = true
console.log(OneEditApart("cat", "cut")) // true
// OneEditApart("cat", "cast") = true
// OneEditApart("cat", "at") = true
// OneEditApart("cat", "act") = false