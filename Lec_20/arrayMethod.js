In JavaScript, array methods are used to add, remove, search, and transform data in arrays.


Common Array Methods in JavaScript

Add / Remove Elements
1 push() –> add at end
let a = [1, 2, 3];
a.push(4);
console.log(a); // [1,2,3,4]

2 pop() – remove from end
a.pop();

3 unshift() – add at start
a.unshift(0);

4 shift() – remove from start
a.shift();

Search / Check Methods
5 includes()
a.includes(2); // true


Transform / Loop Methods
7 map() – transform each element
let nums = [1,2,3];
let square = nums.map(n => n*n);  // [1,4,9]


8 filter() – condition based
nums.filter(n => n > 1); // [2,3]

9 reduce() – single value
nums.reduce((acc, val) => acc + val);  



Sorting & Reversing
10 sort()
let arr = [3,1,10];
arr.sort((a,b) => a - b); // ascending  [1,3,10]



Extract / Modify Array
11 slice() – no change in original array
let a = [1,2,3,4,5]

console.log(a.slice(0,2)); // [1,2]


12 splice() – changes array
let a = [1,2,3,4,5]

a.splice(1,1,"X");
console.log(a) // [1,"X",3,4,5]






