function convertCtoF(celsius) {
    let fahrenheit= celsius*9/5 +32;
    return fahrenheit;
  }
  
  convertCtoF(30);


  //reverse a string
function solution(str){
    let newStr='';
    for (let i=str.length-1; i>=0; i--) {
      newStr+=str[i];
    }
    return newStr;
  }

  function solution(str){
    return str.split('').reverse().join('');  
  }

//factorize a number
function factorial(n){
  
  if(n===0||n===1) {
    return 1;
  }
  for (let i=n-1; i>=1; i--) {
    n*=i;
  }
  return n;
}

const factorial = n => n ? factorial(n - 1) * n : 1;  //using recursion

//longest word in a string
function findLongestWordLength(str) {
  var strSplit = str.split(' '); //must include space
  console.log(strSplit);
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//largest number in a sub-array
function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-10, -3, -1, -111]]));
//The map() method creates a new array with the results of calling a provided function on every element in this array
//The Math.max() function returns the largest of zero or more number
//The apply() method takes arguments as an array.
//like so Math.max.apply(null, [1,2,3])
//the apply method is useful here since Math.max () cannot be used directly on arrays; arrays don't have a built in max function in js


//confirm if string ends with given target
//using substr() method
//extracts a subtring from given string from specified start position
//if start position is -ve it begins extraction from the end of the string
//takes two params, start pstn and no. of characters to extract,num
//if num is ommited, extracts rest of string from start
function confirmEnding(str, target) {
  
  if(str.substr(-target.length)===target) {
    
    return true;
  }
  else {return false;}
  

}

console.log(confirmEnding("Bastian", "ian"));

//using endsWith() method, arrow function and ternary operator to confirm string ending

const confirmEnding= (str, target) => str.endsWith(target) ? true: false;

console.log(confirmEnding("Bastian", "ian"));

//covert string to an array
const stringToArray= string => string.split(" ");// putting ' ' seperates with spaces between words

//repeat a string num times
function repeatStringNumTimes(str,num) {
  let repeatString='';
  while (num>0) {
  repeatString+=str;
  num--
  }
  return repeatString;
}
console.log(repeatStringNumTimes('moses',5))

//using repeat() method
const repeatStringNumTimes=(str,num)=> str.repeat(5)

console.log(repeatStringNumTimes('moses',5))

//truncate  a string
function truncateString(str, num) {
  let truncatedString='';
  if (str.length > num) {
truncatedString+=str.slice(0,num) + '...';
  } else if (str.length==num) {
    truncatedString+=str;
  } else if (str.length<str.length+2) {
    truncatedString+=str;
  }
  return truncatedString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//finders keepers
//return the first element that 'passes the test'
//i.e. returns true when passed to func
function findElement(arr, func) {
  let num = 0;
  for (let i=0; i<arr.length;i++) {
num=arr[i];
if(func(num)) {
  return num;
}
}
return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//The find() method returns the first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned.
function findElement(arr, func) {
  return arr.find(func);
}

//find all numbers divisible by given number
function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0) //filter() returns an array of all numbers passing given test
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}


mutation(["hello", "hey"]);


//split an array into groups the length of size and return them as a 2D array
function chunkArrayInGroups(arr, size) {
  let array=[];
  for (let i=0;i<arr.length;i+=size) {
    array.push(arr.slice(i,i+size))
  }

  
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));