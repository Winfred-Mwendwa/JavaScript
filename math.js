//generate a random decimal number with js
console.log(Math.random());

//generate random whole number between 0 and 10
console.log(Math.floor(Math.random() * 10));

//genarate random whole number within a range min-max
const max=10;
const min=50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//return an integer from a string
function stringInt(str) {
    return parseInt(str);
}
console.log(stringInt('033'));

//use the radix parameter in parseint to define the base
//conversion from Binary to decimal
function binaryInt(str) {
    return parseInt(str,2);
}
console.log(binaryInt(1001));
