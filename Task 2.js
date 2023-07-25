let str = prompt("Enter Number Separate By Comma: ");

let numberArray = str.split(",").map(Number)

let total = numberArray.reduce((accumulator, currentValue) => currentValue > 0 ? accumulator + currentValue : accumulator + 0, 0);

console.log(total)