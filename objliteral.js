//easily define an object literal as follows
const createPerson = (name, age, gender) => ({name, age, gender})

console.log(createPerson('Peter', 30, 'male'))

//define a function within an object
//ES5
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

//ES6
const person1= {
    name:'Taylor',
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
}