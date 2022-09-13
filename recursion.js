//recursion is a case where a function calls itself
//using recursion to replace a for loop
function sum(arr,n) {
    let sum=0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        
    }
    return sum;
}
console.log(sum([0,1,2], 2));

function recurse(arr,n) {
    if (n <= 0) {           //base case; executed first and tells the function when to stop calling itself
        return 0;              //its a simple case where the return value is known
      } else {
        return recurse(arr, n - 1) + arr[n - 1]; //for larger values of n, function uses n-1 condition 
                                                //it recalls itself until the base case is no longer true
      }
    }
console.log(recurse([0,1,2], 2));

//countup using recursion

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

//countdown using recursion
//approach 1
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

//approach 2
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      let countdownArray = countdown(n - 1);  //conditional (ternary) operator
      console.log(countdownArray)
      countdownArray.unshift(n);
      return countdownArray;
  }
  }

//using recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
        let array= (rangeOfNumbers(startNum, endNum-1));
        array.push(endNum);
        return array;
    }
      
    } 
        
  
