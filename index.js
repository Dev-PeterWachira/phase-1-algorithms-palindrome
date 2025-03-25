function isPalindrome(word) {
    let str = word.split("").reverse().join("");

    if (word === str) {
        return true
    } else {
    return false
    }
}
/* 
  split the string,reverse the string,join the string and compare it with the original string
*/

/*
  First of all reverse the string and then compare it with the original string
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
