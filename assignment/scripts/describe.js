// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First we Make a variable called name and set it equal to 'Dane'
// Next Check to see if name equals Mary
// If name does equal  Mary we console.log 'Hi, Mary!'
// If name does not equal Mary we console.log 'How do you do?'
 
//CODE
/*
let name = 'Dane';
 
if (name === 'Mary') {
 console.log('Hi, Mary!');
} else {
 console.log('How do you do?');
}
 
 
*/


// 2. WRITE YOUR DESCRIPTION HERE
//  A variable named secret is made and left empty
// Another variable named code is created and set equal to the number 123
// A conditional is made so when code equals 123 the string 'super' is added to the variable secret and the variable code  changes to code times 2
// Another conditional is created to check if code is greater than 250, if true change the variable secret to the string 'duper'
// we console log secret
 
//CODE
/*
let secret;
 
let code = 123;
 
if(code === 123) {
 secret = 'super';
 code = code * 2;
}
 
if (code > 250) {
 secret = 'duper'
}
 
console.log(secret)
 
*/


// 3. WRITE YOUR DESCRIPTION HERE
// We start with 3 variables isStudent is set to true, age is set to 34, zip is set to 55407
// Next create a conditional to check if isStudent equals true and zip is greater than 80000
// log the console `You're a student on the West Coast!` -- if isStudnet is false or age is lessthan 30 console log 'What are your hobbies?'-- If isStudent equals true console log 'Welcome to Prime!'
// If nothing else works console log 'How about the weather?'
 
 
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;
 
if (isStudent === true && zip > 80000 ) {
 console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
 console.log('What are your hobbies?');
} else if (isStudent === true) {
 console.log('Welcome to Prime!');
} else {
 console.log('How about the weather?')
}
 
*/
 
 
 
 
// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!
 
// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'
 
//CODE
/*
let number = 1;
 
// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;
 
if (number >= 2) {
 console.log('yes');
}
 
*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'
 
 
// FIX - Switch colors so colorOne is 'blue' and  colorTwo is 'red'
 
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
 
if (mix === true) {
 colorOne = 'purple';
// Add colorTwo = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'
 
/*
let temp = 40;
const time = 4;
// FIX - wrong operator change or "||" to and "&&" so it checks to see if both values are true before executing
if (temp > 39 || time >= 4) {
 console.log('throw away the food!');
}
*/


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

