// to convert javascript to json we use stringify()

const allData = {
    name: "kingsley",
    age:20,
    surname:"john-holt"
};

let jsonFile = JSON.stringify(allData);
console.log(jsonFile);

/*stringify also accepts optional parameters, like arrays,
 etc. to control what strings we really want to stringify*/

console.log(JSON.stringify(allData, ["surname"]));

//JSON.parse() is used to convert data from JSON back to javascript object!
console.log("converts from json to javascript object"); + 
console.log(JSON.parse(jsonFile));

/*To access data from a JSON object, you can either use dot or bracket notation. 
In this example, we are using dot notation to access the age from the JSON object: */

/*JSON stands for JavaScript Object Notation.
 It is a lightweight, text-based data format that is commonly used to exchange
  data between a server and a web application 
  
  
  JSON supports many data types including objects, arrays, strings, booleans, null, and numbers.*/