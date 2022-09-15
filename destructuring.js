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
