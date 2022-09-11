//A queue is an abstract data structure in which items can be added at the end and removed from the front
//we declare a functon that takes an array arr and a number item as parameters
function nextInLine (arr, item) {    
    arr.push(item);           //we add the number to the end of the array using .push()
    var removed= arr.shift();//remove the first element using .shift()
    return removed;         //return the element that was removed
}

// Setup for the test array
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));