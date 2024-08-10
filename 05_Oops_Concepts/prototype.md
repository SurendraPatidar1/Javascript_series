# JavaScript Object Definition 
# Methods for Defining JavaScript Objects
> Using an Object Literal
> Using the new Keyword
> Using an Object Constructor
> Using Object.assign()
> Using Object.create()
> Using Object.fromEntries()

1. # JavaScript Object Literal
An object literal is a list of property names:values inside curly braces {}.
# Example :
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

2. # Using the new Keyword
Create an empty JavaScript object using new Object()
# Example:
  const person = new Object();
# But, there is no need to use new Object().
For readability, simplicity and execution speed, use the object literal method.


3. // Copies properties from a source object to a target object
Object.assign(target, source);

// Creates an object from an existing object
Object.create(object);

// Returns an array of the key/value pairs of an object
Object.entries(object);

// Creates an object from a list of keys/values
Object.fromEntries();

// Returns an array of the keys of an object
Object.keys(object);

// Returns an array of the property values of an object
Object.values(object);

// Groups object elements according to a function
Object.groupBy(object, callback);


# What is Prototype ? 
## All JavaScript objects inherit properties and methods from a prototype.

