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
const mixedArr = [11, true, NaN, null, "Hello"];
console.log(mixedArr); // prints: [11, true, NaN, null, "Hello"]
// Note: declaring an array with `const` prevents reassignment (mixedArr = ...)
// but does NOT prevent modifying the contents (mixedArr[0] = 99 would work)

let poppedElement = mixedArr.pop(); // removes last element ("Hello") and returns it
console.log("Popped Element :", poppedElement); // logs the value that was removed by pop()

console.log("Array after pop :", mixedArr); // logs the array after the last element was removed

mixedArr.push("Other Element")
console.log("Array after push :", mixedArr); // logs the array after adding a new element at the end
