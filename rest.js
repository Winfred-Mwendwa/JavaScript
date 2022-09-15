//rest parameter syntax(...) is used to enable a function take on a variate number of arguments

const sum = (...args) => {
  
    return args.reduce((a, b) => a + b, 0);
  }

//the spread operator(...) is used to seperate an array or other iterable into a set of arguments
//find the maximum number in an array
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus)

//copy contents of one array to another
const array1=[1,23,55];
const array2=[...array1]
console.log(array2);
