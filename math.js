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


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];
  
    //Looping through each key in arr object
    for (let elem in arr) {
      //Rounding off the orbital period value
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);