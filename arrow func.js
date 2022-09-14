//arrow functions are inline functons used to simplify anonymous functions 
//anonymous functions are unique to a code block and used only once. they are passed to another function

document.addEventListener('click', function name() {
    console.log('click')
})

//can be simplified to
document.addEventListener('click', () => console.log('click'))

//get rid of function keyword as it is assumed
//parameters go to the left of the arrow
//empty brackets if no parameters
//no need for brackets for a single parameter
//everything that needs to be returned goes to the right of the arrow
//get rid of curly braces