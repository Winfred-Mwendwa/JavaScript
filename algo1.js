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

