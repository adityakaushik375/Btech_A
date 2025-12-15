In JavaScript, string methods are used to manipulate and work with text.


Common String Methods in JavaScript
1 length

Returns string length.

let str = "JavaScript";
console.log(str.length); // 10

2 toUpperCase() / toLowerCase()

Changes case.

str.toUpperCase(); // "JAVASCRIPT"
str.toLowerCase(); // "javascript"

3 trim()

Removes spaces from both ends.

let name = "  Aditya  ";
name.trim(); // "Aditya"

4 charAt(index)

Returns character at index.

str.charAt(4); // "S"

5 indexOf() 

Finds position of a character or word.

str.indexOf("S");      // 4


6 includes()

Checks if value exists.

str.includes("Script"); // true



7 slice(start, end)

Extracts part of string.

str.slice(0, 4); // "Java"


8 replace() / replaceAll()

Replaces text.

let text = "I love JS";
text.replace("JS", "JavaScript");

let msg = "hi hi hi";
msg.replaceAll("hi", "hello");


9 concat()

Joins strings.

let a = "Hello";
let b = "World";
a.concat(" ", b); // "Hello World"

10 repeat()

Repeats string.

"JS ".repeat(3); // "JS JS JS "





