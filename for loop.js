// syntax is for(a; b; c;) {}
//a-initialization statement- executed only once at the beginning and is used to set up the loop
//b-condition statement- executed at the begining of the loop as long as it evaluates to true
//c-final expression- executed at the end of each loop iteration, prior to the next condition check... 
//and is usually used to increment or decrement your loop counter.


//for loop to add numbers 1 through 5 to myArray
 let myArray=[];

 for (let i = 1; i < 6; i++) {
    myArray.push(i); 
 }
 console.log(myArray);