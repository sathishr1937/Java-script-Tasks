/*
8 data types we have in java script

object
number
bigint
boolean
undefined
null
symbol
string
*/


// String (sequence of cracters with single or double qoutes)

// let s = 'sathish';
// let n = 'jaba';
// console.log(s);
// console.log(n)

// Numbers ( Java script numbers are treated as numbers including float values)

// let a = 10;
// let b = 20.0232;
// console.log(typeof(a)); // number
// console.log(typeof(b)) // number
// console.log(Number.MAX_VALUE) // 1.7976931348623157e

// bignit (it can store until 32 digit values it will convert value as exponital form)

// let b = 209000000000000000000000000000000000000000000000000;
// console.log(b) // 2.09e+50
// console.log(typeof(b)) // number

//boolean ( mostly usde for decision pupose only TRUE or FALSE);

// let a = 30
// let b = 40
// console.log(a == b) // return false value 
// console.log(typeof( a == b)) // boolean

// Undefined (variable is defined and value is not intilized the it is undefiend)

// let a;
// console.log(a); // undefined
// function sample(){
// let a = 10;
// }
// console.log(sample())// undefined

//NULL (NULL is also an one of value to variables)

// let a = null;
// console.log(a); // NULL


// symbol (Symboles are nothing but unquie values and immutable it will mostly used in places like private properties)

// const val = Symbol('sathish');
// console.log(val) //symbol(sathish)
// console.log(typeof(val))// symbol
// console.log(val.description ) // sathish

// Objects (Objects are nothing but Name value value pair combination it is used to represent real time objects)

let a = {name : 'sathish', age : 20};
let b = ['sathish']
let c = "sahish"
console.log(a); // {name: 'sathish', age: 20}
console.log(typeof(a))// object
console.log(typeof(b)) //  object
console.log(typeof(c))// String

