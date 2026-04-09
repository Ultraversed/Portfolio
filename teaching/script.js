let myNumber = 5**3;
//console.log(myNumber);

let Marriedstatus = true;
let age = 55-"5ab";
console.log(age);
console.log(typeof age);

 age = 55+5;
 console.log("number as datatype");
 console.log(age);
 console.log(typeof age);


if(age == 55){
    console.log(Marriedstatus);
}
else{
    console.log("pls input a valid number");
}

let address;



//console.log(typeof Marriedstatus);

console.log(`The value of Marriedstatus is ${Marriedstatus} and its type is ${typeof Marriedstatus}`);
//the above is called template literals, it allows us to embed expressions inside string literals, using backticks and ${} syntax.
let a = 0;
for (i=0;i<20;i++){
    a=a+2;
console.log(a);
}