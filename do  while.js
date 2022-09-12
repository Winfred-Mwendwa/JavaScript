//a do...while loop will first do one pass of the code inside the loop no matter what, 
//and then continue to run the loop while the specified condition evaluates to true
//It ensures that the code inside the loop will run at least once as demonstrated below;

const myArr=[];
let i=10;

do {
    myArr.push(i);
    i++;
} while (i<10);

console.log(myArr);

const myArray=[];

for (let i = 10; i < 5; i++) {  
    myArray.push(i);

}
console.log(myArray);