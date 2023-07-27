let str = prompt("Enter Number Separate By Comma: ");

let numberArray = str.split(",").map(Number)

function findMostFrequent(arr) {
  const frequency = {};

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Get the current element
    const element = arr[i];

    // If the element is not in the frequency object, set its count to 1
    if (!frequency[element]) {
      frequency[element] = 1;
    }
    // If the element is already in the frequency object, increment its count by 1
    else {
      frequency[element]++;
    }
  }

  // Find the most frequent element and its count
  let mostFrequentElement;
  let highestCount = 0;

  // Iterate through the frequency object
  for (const element in frequency) {
    // Check if the current element has a higher count than the previous most frequent element
    if (frequency[element] > highestCount) {
      mostFrequentElement = element;
      highestCount = frequency[element];
    }
  }

  return mostFrequentElement;
}

// Test the program
const mostFrequent = findMostFrequent(numberArray);
console.log(`The most frequent element is: ${mostFrequent}`);