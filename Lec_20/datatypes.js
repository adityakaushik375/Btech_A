In JavaScript, data types define what kind of value a variable can hold.
They are mainly divided into Primitive and Non-Primitive (Reference) types.

Primitive Data Types

These store single values and are compared by value.

1. Number

Used for integers and decimals.

let age = 20;
let price = 99.5;

2. String

Used for text (written inside quotes).

let name = "Aditya";
let city = 'Delhi';

3. Boolean

Represents true or false.

let isLoggedIn = true;
let isAdmin = false;

4. Undefined

A variable declared but not assigned a value.

let x;
console.log(x); // undefined

5. Null

Represents intentional empty value.

let data = null;

6. BigInt

Used for very large numbers.

let bigNumber = 12345678901234567890n;



Non-Primitive (Reference) Data Types

These store multiple values and are compared by reference.

1. Object

Used to store key–value pairs.

let student = {
  name: "Rahul",
  age: 21
};

2. Array

Used to store multiple values in a list.

let marks = [90, 85, 88];

3. Function

Functions are also objects in JS.

function greet() {
  console.log("Hello");
}