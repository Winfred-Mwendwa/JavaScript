//creating a method within an object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  };
  
  dog.sayLegs();

//make code more reusable with this keyword
let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

//constructor functions to create objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

//use the new operator to call a constructor and create a new instance of an object
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
  let hound= new Dog();  //hound will have all the properties of the dog object eg hound.name

//make constructors more flexible using parameters
function Dog(name, color) {
    this.name=name;
    this.color=color;
    this.numLegs=4;
    }
    let terrier= new Dog('Kip','white');
