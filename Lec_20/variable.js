In JavaScript, a variable is used to store data values that can be used and changed later in a program.


Ways to Declare Variables in JavaScript

JavaScript provides 3 keywords to declare variables:

var

let

const


var (Old Method)


Can be redeclared and reassigned


var x = 10;
var x = 20;   // allowed
x = 30;       // allowed


Not recommended in modern JavaScript.


let (Modern & Preferred)


Cannot be redeclared

Can be reassigned


let age = 25;
age = 30;     // allowed
// let age = 40; ❌ error


const (Constant Variable)


Cannot be redeclared

Cannot be reassigned


const PI = 3.14;
// PI = 3.5; ❌ error