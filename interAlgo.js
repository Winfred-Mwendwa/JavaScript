//given an array of 2 numbers,return the sum of all numbers in that range plus the sum of the two numbers
//the smallest number is not nececarrily the start

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  
  console.log(sumAll([4, 1]));


//given two arrays, return a new array with elements umique to each array
function diffArray(arr1, arr2) {
  const newArr = [];
  
  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments
function destroyer(arr,...args) {  //use spread operator to retrieve the arguments
  
  return arr.filter(elem => !args.includes(elem)); //filter out the array to include elements NOT in args
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Make a function that looks through an array of objects (first argument) and 
//returns an array of all objects that have matching name and value pairs (second argument).
function whatIsInAName(collection, source) {
  
  
const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
                     .every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));


  
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); //use a positive lookahead to split strings along uppercase letters
}

spinalCase('This Is Spinal Tap');

//Pig Latin
//if word starts with a vowel, return word wih 'way' at the end
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add 'ay' to it.
function translatePigLatin(str) {
  let vowelRegex=/^[a|e|i|o|u]/;
  
  if (vowelRegex.test(str)) {
    return str.concat('way');
  }
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
  
}

translatePigLatin("consonant");
/*If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
Now, we can start building our Pig Latin string to return. This can be built in three parts:
The first part contains all of the characters in the original string, starting from the first vowel. We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
The second part contains the consonant string we just built. (If you add the second and first parts of this string together, you will get the original string.)
The final part contains “ay”.*/

/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it.*/

function myReplace(str, before, after) {
  let myRegex=/^[A-Z]/;
  if (myRegex.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
return str.replace(before,after);
  }
  


myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


//DNA pairing
function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function(char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };

  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }

  return paired;
}

// test here
pairElement("GCG");

//return the skipped character from a set of sorted characters
//return undefined if no character was skipped
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* ascii code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

//return new aray with unique numbers from each array in the order in which they occur in original arrays
function uniteUnique(...arr) {
  
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!result.includes(arr[i][j])) {
        result.push(arr[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  var splitStr=str.split('');
  for (let i=0;i<splitStr.length;i++) {

      switch (splitStr[i]) {
        case '&':
        splitStr[i]='&amp;';
        break;
        case '<':
        splitStr[i]='&lt;';
        break;
        case '>':
        splitStr[i]='&gt;';
        break;
        case '"':
        splitStr[i]='&quot;';
        break;
        case "'":
        splitStr[i]='&apos;';
        break;
      }
    }
     return splitStr.join('');

  }

convertHTML("Dolce & Gabbana");

//return the running sum of an array

let arrayFunc=arr=> arr.reduce((a,b)=>a+b);

console.log(arrayFunc([0,1,3,4]));


//return the sum of all odd fibonnacci numbers less than or equal to num
/*The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. */
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);

//iterate over the given array and remove elements starting from the first element until the function returns true
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

//flatten a nested array while accounting for varrying levels of nesting
/*If you are dealing with an array, then you need flatten it by getting the value inside of the array. 
This means if you have [[4]] then instead of returning [4] you need to return 4. */
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

//convert binary string to words
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/*write a function that adds two argumentss together if both are provided
if one is provided return a function that accepts the 2nd argument and returns their sum
if either of the arguments is not a number return undefined*/


function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

function palindrome(str) {
  let norm=str.split(/\s|_|,|.|-/).join('').toLowerCase();
  console.log(norm)
  let rev=norm.split('').reverse().join('');
  console.log(rev)
  if (norm==rev) {
    return true;
  } else {return false}
  
}

console.log(palindrome("eye"));