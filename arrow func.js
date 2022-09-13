//arrow functions are used to simplify functions with no body but only a simple return value
const myFunc = function() {
    const myVar = "value";
    return myVar;
  }
console.log(myFunc);

//can be simplified to
const myFunc2 = () => "value";

console.log(myFunc2);

