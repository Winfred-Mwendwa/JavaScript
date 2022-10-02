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

//verify if an object is an instance of a given constructor using instanceof method; returns true or false
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse= new House(5);
  
  console.log(myHouse instanceof House);

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

  function Dog(name) {
    this.name = name;//own property
    
  }
  Dog.prototype.numLegs=4;//prototype property
  
  let beagle = new Dog("Snoopy");
console.log(beagle);

//diffrence between own properties and prototype properties
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle1 = new Dog("Snoopy");
  //

  let ownProps1 = [];
  let prototypeProps = [];
  
  for (let property in beagle1) {
    if (beagle1.hasOwnProperty(property)) {
      ownProps1.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

//refractor prototype properties by creating an object for them
function Dog(name) {
    this.name = name;
  }
  constructor:Dog, //define the constructor so it is not overidden
  Dog.prototype = {
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
  },
  describe: function() {
      console.log("My name is " + this.name);
    }
  };

//check prototype of an object using isPrototypeOf()
function Dog(name) {
    this.name = name;
  }
  
  let beagle2 = new Dog("Snoopy");
  
  
  Dog.prototype.isPrototypeOf(beagle2);

//a prototype has its own prototype; the Object prototype
function Dog(name) {
    this.name = name;
  }
  
  let beagle3 = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle3);  // yields true
  
  Object.prototype.isPrototypeOf(Dog.prototype);

//Don't Repeat Yourself(DRY) principle using inheritance
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    
  };
  
  function Animal() { } //supertype containing properties common to all animals
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  
  };

//inherit properties from the supertype with object.create(obj)
//ChildObject.prototype = Object.create(ParentObject.prototype);
let duck = Object.create(Animal.prototype); 
let beagle4= Object.create(Animal.prototype);

//set the child's prototype to an instance of the parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle5 = new Dog();

//reset an inherited constructor property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck1= new Bird();
let beagle6 = new Dog();

//add methods after inheritance
//ChildObject.prototype.methodName = function() {...};
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark= function () {
  console.log('Woof!');
}

let beagle7 = new Dog();

//overide inherited methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; }//override

let penguin = new Penguin();
console.log(penguin.fly());

//Use a Mixin to Add Common Behavior Between Unrelated Objects
//A mixin allows other objects to use a collection of functions.
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin= function (obj) {
    obj.glide= function() {
      console.log('gliding');
    }
  };
  glideMixin(bird);
  glideMixin(boat);

  //Use Closure to Protect Properties Within an Object from Being Modified Externally
  //In JavaScript, a function always has access to the context in which it was created. This is called closure
  function Bird() {
    this.getWeight = function () { //getWeight  is a privileged method, because it has access to the private variable weight
      let weight= 15;
      return weight;
  
    }

  }

//the Immediately Invoked Function Expression (IIFE)
//two parentheses () at the end of the function expression;after wrapping it in parenthesis cause it to be immediately executed or invoked.
(function () {
    console.log("A cozy nest is ready");
  })();

//an IIFE is often used to group related functionality into a single object or module.
//the module here should return an object
let funModule = (function () {
    return {isCuteMixin: function(obj) {
    obj.isCute = function() {
      return true;
    };
  },
  singMixin : function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  }
    }
  })();


  const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person("Bob Ross");
  console.log(bob.getFullName());