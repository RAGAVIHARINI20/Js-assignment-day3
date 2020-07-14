/*1: Variable scopes
The var variables belong to the global scope or local scope if they are declared inside a function
*/
var counter;

/* The let variables are blocked scopes*/

let counter;

/*2: Creating global properties
The global var variables are added to the global object as properties.
 The global object is window on the web browser 
 */
var counter = 0;
console.log(window.counter); //  0

/*However, the let variables are not added to the global object:*/

let counter = 0;
console.log(window.counter); // undefined

/*3: Redeclaration
The var keyword allows you to redeclare a variable without any issue.*/

var counter = 10;
var counter;
console.log(counter); // 10

/*if you redeclare a variable with the let keyword, you will get an error.*/

let counter = 10;
let counter; // error

// Variables defined with const behave like let variables, except they cannot be reassigned

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

//Declaring a variable with const is similar to let when it comes to Block Scope.

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

//JavaScript const variables must be assigned a value when they are declared

const Py = 3.14159265359;

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//But you can NOT reassign a constant array

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR