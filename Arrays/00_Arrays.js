/*
  Examples demonstrating basic JavaScript arrays:
  - how to create arrays
  - how to inspect them with console.log
  - that arrays can contain different data types
  - length property
  - note about const vs let for arrays
*/

let arr = [10, 12, 15, 21, 25]; // numeric array: elements are stored in order (0-based indexing)
console.log(arr); // prints the whole array: [10, 12, 15, 21, 25]
// Example: arr[0] is 10, arr[2] is 15

let fruits = ["Kiwi", "Orange", "Apple", "Mango"]; // array of strings
console.log(fruits); // prints the array of fruit names
console.log("Length of fruits is :", fruits.length); // .length returns number of elements (4)


// Arrays can store multiple data types in the same array (not type-restricted)
const mixArr = [11, true, NaN, null, "Hello"];
console.log(mixArr); // prints: [11, true, NaN, null, "Hello"]
// Note: declaring an array with `const` prevents reassignment (mixArr = ...)
// but does NOT prevent modifying the contents (mixArr[0] = 99 would work)


//Accessing elements by index
console.log("First Element :", mixArr[0]); // logs the first element (11)
console.log("Third Element :", mixArr[2]); // logs the third element (NaN)

// Modifying elements by index
mixArr[1] = false; // changes the second element from true to false
console.log("Array after modification :", mixArr); // logs the modified array

// Using array methods: pop() and push()
let poppedElement = mixArr.pop(); // removes last element ("Hello") and returns it
console.log("Popped Element :", poppedElement); // logs the value that was removed by pop()

console.log("Array after pop :", mixArr); // logs the array after the last element was removed

console.log(mixArr.push("Other Element")); // adds a new element at the end of the array and returns the new length
console.log("Array after push :", mixArr); // logs the array after adding a new element at the end

// Using shift() and unshift() methods
let washDishes = [];
washDishes.unshift("Big Pans"); // adds "Big Pans" at the start of the array and returns the new length
console.log("Wash Dishes List after 1st Element:", washDishes);
washDishes.unshift("Big Plates"); // adds "Big Plates" at the start of the array and returns the new length
console.log("Wash Dishes List after 2nd Element:", washDishes);
washDishes.unshift("Non-Stick Frying Pan"); // adds "Non-Stick Frying Pan" at the start of the array and returns the new length
console.log("Wash Dishes List after unshift :", washDishes); // logs the array after adding elements at the start

let firstDeletedItem = washDishes.shift(); // removes the first element ("Non-Stick Frying Pan") and returns it
console.log("First Deleted Item :", firstDeletedItem); // logs the value that was removed by shift()
console.log("Wash Dishes List after shift :", washDishes); // logs the array after the first element was removed    

let secondDeletedItem = washDishes.shift(); // removes the first element ("Big Plates") and returns it
console.log("Second Deleted Item :", secondDeletedItem);
console.log("Wash Dishes List after second shift :", washDishes); // logs the array after the first element was removed
