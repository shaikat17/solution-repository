let str = prompt("Enter Number Separate By Comma: ");
let target = Number(prompt("Enter Target Value: "))

let numberArray = str.split(",").map(Number)

function findTwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  }

  //1, 3, 6, 8, 11, 15
  
  // Test the function
  const indices = findTwoSum(numberArray, target);
  console.log(`Indices of the two numbers: ${indices}`);