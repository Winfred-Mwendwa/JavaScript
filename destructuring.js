//destructuring assignment is used to create a local variable from say array items or object peoperties
//arrays
//old way
const array=[1, 2, 3, 4];

const first=array[0];
const second=array[1];
const third=array[2];  //etc
//destructuring way 

const [first1, second1, third1] = array;
console.log(first);
console.log(first1);


//objects
const girls={
    Age:30,
    Color:'lightskin'
};

//old way
const age1=girls.Age;
console.log(age1)

//destructuring
const {Age,Color} = girls;
console.log(Age)

//you can rename the opject property in the destructured assignment
const {Age:age , Color:color} = girls;
console.log(age)

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
 
  const {today:{low:lowToday, high:highToday}} =LOCAL_FORECAST;
  console.log(lowToday)
  //Use array destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
  let a=5,b=6;
  [a,b]=[b,a];
  console.log(b)

  //Use destructuring and rest parameter to remove the first two elements from an array
const source = [1,2,3,4,5,6,7,8,9,10];


const [,,...arr1]=source;
console.log(arr1)

//Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  
  const half = ({max,min}=stats) => (max + min) / 2.0; 
  console.log(half());
  