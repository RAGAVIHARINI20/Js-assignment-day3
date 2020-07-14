//There are eight basic data types in JavaScript

//number
var a=40;//holding number  

//String
var b="Ragavi";//holding string  

//BigInt

const bigInt = 1234567890123456789012345678901234567890n;

//boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//null
let age = null;

//undefined
let age;

alert(age); // shows "undefined"

//objects
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

//symbol
let sym1 = Symbol()
let sym2 = Symbol('foo')