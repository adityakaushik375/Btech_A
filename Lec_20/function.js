FUNCTIONS IN JAVASCRIPT

A function is a block of reusable code that performs a task.

1 Function Declaration
function add(a, b) {
  return a + b;
}

add(2, 3); // 5

2 Function Expression
const multiply = function (a, b) {
  return a * b;
};

multiply(5,5) // 25


3 Arrow Function (ES6)
const sub = (a, b) => a - b;


Short form:

const square = n => n * n;

4 Parameters & Arguments
function greet(name) {
  console.log("Hello " + name);
}

greet("Aditya");

5 Return Statement
function sum(a, b) {
  return a + b;
}

6 Default Parameters
function msg(text = "Hi") {
  console.log(text);
}