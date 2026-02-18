const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

console.log(negativeNumber);

let compf;
 compf = 5677;
console.log(compf);

let num = 55;
let word = "wwe";
 
let numr;
numr=55;
console.log(numr++);
console.log("44"%21);
console.log("hello world!, im kingsley john-holt, im currently a mathematics undergraduate at the university of uyo");
//concatination
let firstName = "Kingsley";
let lastName = "John-Holt";
let fullName = firstName + " " + lastName;
console.log(fullName);

//concatination using +=
let greeting = "Hello, ";
greeting += firstName;
console.log(greeting);

//In programming, a function is a reusable block of code that performs a specific task and can be called with various inputs. A method, on the other hand, is a type of function that is associated with an object, meaning it operates on the data contained within that object.

//concatination using concat() method
let city = "Uyo";
let country = "Nigeria";
let location = city.concat(", 33, this isn't no error ", country);
console.log(location);

//Arrays
console.log("\nArrays in JavaScript, push adds elements to an array");
const fruit=["apple", "banana", "orange"];
console.log(fruit);
const allFruit=fruit.push("mango");
console.log(fruit);

//pop removes the last element of an array
console.log("\nUsing pop method");
const removedFruit=fruit.pop();
console.log(fruit);
console.log(removedFruit);  

//unshift adds elements to the beginning of an array
console.log("\nUsing unshift method");
const newLength=fruit.unshift("grape");
console.log(fruit);
console.log(newLength);

//shift removes the first element of an array
console.log("\nUsing shift method");
const shiftedFruit=fruit.shift();
console.log(fruit);
console.log(shiftedFruit);

console.log("\nUsing shift and pop together");

let arr = ["a", "b", "c", "d"];
let first = arr.shift();
let last = arr.pop();
console.log(first, last, arr);

//two-dimensional array
console.log("\nTwo-dimensional array (chessboard representation)");
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // "Q"

/*array distructuring
What Is Array Destructuring, and How Does It Work?
Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking array elements into distinct variables.
This technique is particularly useful when working with arrays and functions that return multiple values. Here is an example of using array destructuring:*/
console.log("\nArray destructuring");
let [firstFruit, secondFruit, ...otherFruits] = fruit;
//rest syntax, denoted by three dots (...). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array. Here's how it works:
console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);

//Array destructuring also allows you to skip elements you're not interested in by using commas. For instance:
console.log("\nSkipping elements with array destructuring");
let fruita = ["apple", "banana", "orange"];
let [firsta, , third] = fruita;
console.log(firsta);
console.log(third); 

//Another powerful feature of array destructuring is the ability to use default values. If the array has fewer elements than the variables you're trying to assign, you can provide default values:

let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//Let's explore each of these steps using the split(), reverse(), and join() methods.
console.log("\nReversing a string using split, reverse, and join methods");
//The split() method divides a string into an array of substrings and specifies where each split should happen based on a given separator. If no separator is provided, the method returns an array containing the original string as a single element
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]
//An empty string (""), which splits the string into individual characters.

/*A single space (" "), which splits the string whe rever spaces occur.

A dash ("-"), which splits the string at each dash.*/
console.log("\nUsing split with a space as a separator");
let charArray1 = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray1); // ["o", "l", "l", "e", "h"]


/*The final step is to convert the reversed array of characters back into a string. We can accomplish this using the join() method. The join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string. If you want to join the characters without any separator, you can use an empty string as the argument. Here's an example:*/
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

/*Remember that strings in JavaScript are immutable, which means you can't directly reverse a string by modifying it. That's why we need to convert it to an array, reverse the array, and then convert it back to a string. This combination of string and array methods provides a powerful and flexible way to manipulate strings in JavaScript.*/

//in conclusion, by using the split(), reverse(), and join() methods together, we can effectively reverse a string in JavaScript. This approach leverages the strengths of both string and array manipulation techniques to achieve the desired result.
let str1 = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "gnidoc"

console.log("hello".split(""));// ["h", "e", "l", "l", "o"]


// 8th feb 2026
//first logic
const lunches = [];

//second logic
function addLunchToEnd(arr, string){
arr.push(string);
console.log(`${string} added to the end of the lunch menu.`);
return arr;
}
addLunchToEnd(lunches, "Hello");

//third logic
function addLunchToStart(arr2, string2){
arr2.unshift(string2);
console.log(`${string2} added to the start of the lunch menu.`);
return arr2;

}
addLunchToStart(lunches, "World");

//fourth logic
function removeLastLunch(arr3){
const updatedLength=(arr3.length);
const lastValue = arr3[updatedLength-1];
 arr3.pop();

if (updatedLength>arr3.length&&arr3.length!==0){
  console.log(lastValue + " removed from the end of the lunch menu");
}
else if(arr3.length===0){
  console.log("No lunches to remove");
}
return arr3;
}

removeLastLunch(lunches);
console.log(lunches);

//fifth logic
function removeFirstLunch(arr4){
  const startElement = arr4[0];
  arr4.shift();

  if (!arr4.includes(startElement)&&arr4.length!==0){
  console.log(startElement + " removed from the end of the lunch menu");
}
else if(arr4.length===0){
  console.log("No lunches to remove");
}
return arr4;
}
removeFirstLunch(lunches);

//sixth logic
function getRandomLunch(arr5){
const randomNum=Math.floor(Math.random()*arr5.length);
arr5[randomNum];
if(arr5.length!==0){
console.log("Randomly selected lunch: " + arr5[randomNum]);
}
else if(arr5.length===0){
  console.log("No lunches available.");
}
}
getRandomLunch(lunches);

/*In JavaScript, the indexOf() method is useful for finding the first index of a specific element within an array. If the element cannot be found, then it will return -1. Here is the basic syntax:

array.indexOf(element, fromIndex)
element represents the value you want to search for within the array, and the fromIndex parameter is the position from which the search should start. The fromIndex parameter is optional. If fromIndex is not provided, the search starts from the beginning of the array. Let's look at an example:*/


/* The splice() method in JavaScript is a powerful way for modifying arrays. It allows you to add or remove elements from any position in an array, including the middle. The return value for the splice() method will be an array of the items removed from the array. If nothing was removed, then an empty array will be returned.

It is important to note that this method will mutate the original array, modifying it in place rather than creating a new array. This is something to be aware of when working with splice(). Here is the basic syntax:

array.splice(startIndex, itemsToRemove, item1, item2)
startIndex specifies the index at which to begin modifying the array, while itemsToRemove is an optional parameter indicating how many elements to remove. If itemsToRemove is omitted, splice() will remove all elements from startIndex to the end of the array. The subsequent parameters (item1, item2, and so on) are the elements to be added to the array, beginning at the start index.
 */

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

//Now, let's look at how to add elements to the middle of an array:
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

//splice(1,2,3,4,5,6,7)

let arrr = [1,2,3,4,5];
console.log("array removed"+arrr.splice(1,2,8,4,5,6,7));
console.log("new array"+arrr);
//array.spice(0) removes everything in the array!

//The includes() method can also accept an optional second parameter that specifies the position in the array to start the search. This is useful if you want to check for an element's presence in a specific part of the array. Here's how you can use this feature:

let numbers1 = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers1.includes(30, 3)); // true
console.log(numbers1.includes(30, 4)); // true

//recall that .includes checks for data types and is case sensitive


/**In summary, shallow copies of arrays can be easily created using methods like concat(), slice(), or the spread operator. These methods are useful for creating new arrays that can be manipulated independently of the original array */

/*Two Dimensional Arrays
Definition: A two-dimensional array is essentially an array of arrays. It's used to represent data that has a natural grid-like structure, such as a chessboard, a spreadsheet, or pixels in an image. To access an element in a two-dimensional array, you need two indices: one for the row and one for the column.*/

/*Array Destructuring
Definition: Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking array elements into distinct variables.*/
const fruitsi = ["apple", "banana", "orange"];

const [firsti, second, thirdi] = fruits;

console.log(firsti); // "apple"
console.log(secondi); // "banana"
console.log(thirdi); // "orange"

//Rest Syntax: This allows you to capture the remaining elements of an array that haven't been destructured into a new array.

const fruitsq = ["apple", "banana", "orange", "mango", "kiwi"];
const [firstq, secondq, ...restq] = fruitsq;

console.log(firstq); // "apple"
console.log(second); // "banana"
console.log(restq); // ["orange", "mango", "kiwi"]

//Spread Syntax: The spread syntax is used to create shallow copies of an array. It allows you to expand an array into individual elements. This is particularly useful when you want to create a new array that includes all the elements of an existing array, along with additional elements.
const originalArray = [1, 2, 3];
const shallowCopiedArray = [...originalArray];

shallowCopiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopiedArray); // [1, 2, 3, 4]

//split() Method: This method divides a string into an array of substrings and specifies where each split should happen based on a given separator. If no separator is provided, the method returns an array containing the original string as a single element.
const str11 = "hello";
const charArray11 = str.split("");

console.log(charArray11); // ["h", "e", "l", "l", "o"]

//reverse() Method: This method reverses an array in place.

//join() Method: This method concatenates all the elements of an array into a single string, with each element separated by a specified separator. If no separator is provided, or an empty string ("") is used, the elements will be joined without any separator.

/*We'll explore three common approaches: the hasOwnProperty() method, the in operator, and checking against undefined.

Let's start with the hasOwnProperty() method. This method returns a boolean indicating whether the object has the specified property as its own property. Here's an example:*/

const obj5 = {
  name: "Alice",
  age: 30 
};
  console.log(obj5.hasOwnProperty("name")); // true
  console.log(obj5.hasOwnProperty("job")); // false
/*Next, we can use the in operator to check if a property exists in an object. The in operator returns true if the specified property is in the object or its prototype chain. Here's how it works:*/ 

/*Another way to check for the existence of a property in an object is to use the in operator. Like hasOwnProperty(), the in operator will return true if the property exists on the object. Here's how you can use it:
*/

console.log("name" in obj5); // true
console.log("job" in obj5); // false  
