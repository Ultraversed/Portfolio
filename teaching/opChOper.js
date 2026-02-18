//The optional chaining operator (?.) is a useful tool in JavaScript that lets you safely access object properties or call 
// methods without worrying whether they exist. It's like a safety net for working with objects that might have missing parts.

const newMethod = {
name: "Kingsley",
age: 23
}

console.log(newMethod.family?.grandfather?.surname);