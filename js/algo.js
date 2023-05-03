// 'ABCDDDEFGHI'

const getLongestNonRepeatingChar = (str) => {
  let arr = [];
  let substr = ""; // *hint*

  for (let i = 0; i < str.length; i++) {
    // for each letter in 'ABCDDDEFGHI'
    // create an array of non repeating strings *hint* chunk the input string into substrings
    let currentChar = str[i]; //*hint* strings are arrays of characters so you don't necessarily need to split into array
    console.log({ currentChar, substr }); // starting with 'A' Now 'B' Now 'C' Now 'D' Now 'D'Again... Now 'D'AGAIN... *well placed console log*
    if (substr.includes(currentChar) || i === str.length - 1) {
      //since 'ABCD' already includes 'D'... //since substr'D' already includes curr'D'...
      arr.push(substr); // print arr = ['ABCD'] // print arr = ['ABCD', 'D']
      substr = currentChar; // substr = 'D' // substr = 'D'
    } else {
      substr += currentChar; // set substring to 'ABCD'
    }
  }
  console.log(arr);
  //return the longest string... after you have chunked the input string into substrings the rest is easy.
  let longest = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    } else if(arr[i].length === longest.length) {

    }
  }
  console.log(longest);
};
getLongestNonRepeatingChar("ABCDDDEFGHI"); // ABCD

// what is the time complexity of this solution?