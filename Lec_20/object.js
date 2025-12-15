OBJECTS IN JAVASCRIPT

An object stores data in key-value pairs.

1 Object Creation
let student = {
  name: "Aditya",
  age: 21,
  course: "BCA"
};

2 Access Object Values
Dot notation
student.name;

Bracket notation
student["age"];

3 Add / Update / Delete
student.city = "Delhi";   // add
student.age = 22;        // update
delete student.course;  //delete