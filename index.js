function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true
}

/* 
  Add your pseudocode here
  return true for single letter words
  define a variable start with 0 
  define a variable end with the length of the word minus 1
  loop through the word (if statement) with start as the index of the first letter and end as index of the last letter
  return true if start and end letters match and false if they don't

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
