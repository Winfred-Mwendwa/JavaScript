/*Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

 */

/*let's cover some functional terminology:

Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 
You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.
 In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda. */

const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// an imperative style in programming is one that gives the computer a set of statements to perform a task.
// functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.slice(0,index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index+1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  //in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
  // function, ideally, should be a pure function, meaning that it does not cause any side effects.
  //at the core of functioal programming is to avoid changing things, whetther variables, arguents or objects
  //mutations could lead to bugs
  //Don't alter a variable or object - create new variables and objects and return them if need be from a function

  //Another principle of functional programming is to always declare your dependencies explicitly. 
  //This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
  
  // The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
 let incremented= fixedValue+1;
 return incremented;

  // Only change code above this line
}

//
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
  return [...bookList, bookName];
}
  // Change code above this line


// Change code below this line
function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}

//map() method for arrays
//The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. 
//It does this without mutating the original array.
//When the callback is used, it is passed three arguments. 
//The first argument is the current element being processed. 
//The second is the index of that element and the third is the array upon which the map method was called.
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names);

//filter() method for arrays
//filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. 
//In other words, it filters the array, based on the function passed to it. 
//Like map, it does this without needing to modify the original array.
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 

//extract data from an array with given conditions
const filteredList = watchList
  .filter(movie => movie.imdbRating >= 8.0) //only movies with an imdbrating >=8
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] })); //use map to shape the output

console.log(filteredList);

//Remove Elements from an Array Using slice Instead of splice
//splice mutates the original array which is an undesired side effect;, while slice does not cause mutation
function nonMutatingSplice(cities) {
    
    return cities.splice(3);
  
    
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

  function nonMutatingSplice(cities) {
    
    return cities.slice(0,3); //limit to only 1st three items
  
    
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

  //combine two arrays or strings using the concat() method
  //For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. 
  //It returns a new array and does not mutate either of the original arrays. 
  function nonMutatingConcat(original, attach) {
    
  return original.concat(attach);
  
    
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);
