let num_1 = parseFloat(prompt("Enter First Number: "))
let num_2 = parseFloat(prompt("Enter Second Number: "))
let operator = prompt("Enter Operator: ")

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Error: Division by zero';
        }
      default:
        return 'Error: Invalid operator';
    }
  }
  
  // Test the calculator
  const result = calculate(num_1, num_2, operator);
  console.log(`Result: ${result}`);