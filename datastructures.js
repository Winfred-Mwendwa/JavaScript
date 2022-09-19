//set the value of an array item using bracket notation
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
ourArray[1] = "not b anymore";
console.log(ourArray);

// push() method adds elements to the end of an array, and unshift() adds elements to the beginning.
function mixedNumbers(arr) {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
    return arr;
  }
console.log(mixedNumbers(['IV', 5, 'six']));

//remove an element from the begining and end of an array using pop() and shift()
//neither take arguments hence elements can only be removed one at a time
function popShift(arr) {
    let popped=arr.pop(); //store the value popped in a variable popped
    let shifted=arr.shift(); ////store the value shifted in a variable shifted
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//use splice() to remove given number of elements starting at specific indexes
//remove elements such that array contains elemnts that add up to 10
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(2,1);
arr.splice(3,2);

console.log(arr);

//add items using splice's third parameter
function htmlColorNames(arr) {
    
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond')
    
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//copy array items using slice()
//takes two parameters, index to begin extracting and index to stop extracting
//value at the stop index is not extracted
//originaal array remains the same
function forecast(arr) {
   
  let newArray= arr.slice(2,4);
    return newArray;
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// return a new array made up of num copies of arr
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      
  newArr.push([...arr]);
      
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));