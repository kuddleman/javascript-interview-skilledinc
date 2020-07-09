// Write a function that returns whether two words are exactly "one edit”.
// An edit is:
// * Inserting one character anywhere in the word (including at the beginning and end)
// * Removing one character
// * Replacing one character



function OneEditApart(word1, word2) {
  
  // your code here
  
}

// Test cases

OneEditApart("cat", "dog") = false
OneEditApart("cat", "cats") = true
OneEditApart("cat", "cut") = true
OneEditApart("cat", "cast") = true
OneEditApart("cat", "at") = true
OneEditApart("cat", "act") = false