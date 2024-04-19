/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    //Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumber = (a, b) => {
    //Code block
    return a + b;
}
let sums = addTwoNumber(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) => (a + b); Can be written this way
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!!');

const sayHello = () => console.log ('hello!');
sayHello();

// Returning Multiple Lines

const returningMultipleLines = () => (
    `<p>
      This is a multiple string
    </p>`
)
console.log(returningMultipleLines());


