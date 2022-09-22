//Title case a sentence
function titleCase(str) {
    str = str.toLowerCase().split(' ');//convert all to lowercase for uniformity;split into substrings for uniformity
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); //covert first char to uppercase and concat with rest of the string
    }
    return str.join(' ');
  }

//copy elements of array 1 to array 2 without mutating original arrays
function frankenSplice(arr1, arr2, n) {
    // create a copy of array2
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) { //add each element of array 1 to array two starting at specified index
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//remove all falsy items from an array
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. 
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

//return lowest index a number can be inserted in a sorted array
function getIndexToIns(arr, num) {

    let array= arr.sort((a, b) => a - b); //sort by default in ascending order;requires a callback function
     for (let i=0; i<array.length;i++) {
   if (array[i]>=num) { //simply return the index of first no greater than num
   return i;
   
   } 
   
     }
     return array.length; //return length of array if no number is greater than num
   }
   
   console.log(getIndexToIns([40, 60], 50));