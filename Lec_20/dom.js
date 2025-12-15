let a = document.getElementById("hey");

console.log(a)

a.style.color = "red" // to style a node
a.style.backgroundColor = "yellow"
a.style.padding = "1rem"

a.innerHTML = "new changed text"

let b = document.querySelector("p") // access first matching node
console.log(b)

let c = document.querySelectorAll("p"); // access all matching node
console.log(c);

b.remove(); // to remove a node from dom

let d = document.createElement("img"); // to create a new node in dom
d.src = "https://images.unsplash.com/photo-1765754431926-964ed45a41e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D";

d.style.height = "400px";
d.style.width = "500px";
d.style.borderRadius = "1rem"
document.body.appendChild(d);