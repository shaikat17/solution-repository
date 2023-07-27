let str = prompt("Enter Number Separate By Comma: ");

let numberArray = str.split(",").map(Number)

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should contain at least two elements";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "No second smallest element found";
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const secondSmallest = findSecondSmallest(numberArray);
  console.log(`Second smallest element: ${secondSmallest}`);