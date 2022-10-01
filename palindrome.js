/*Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*/

function palindrome(str) {
    let alphanumeric= str
    .toLowerCase() //turn everything to lowercase
    .match(/[a-z0-9]/g) //remove all non-alphanumeric characters
    
    
    return alphanumeric.join('')===alphanumeric.reverse().join(''); //check for palindrome
  
  }
  console.log(palindrome("eye"));