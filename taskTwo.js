// Create an array with missing numbers
const taskTwoArray = [1, 2, 3, 5, 8, 12];

// Initialize an empty array to store the filled and sorted numbers
const filledSortedArray = [];

// Loop through the range from the first number to the last number in the original array
for (let i = taskTwoArray[0]; i <= taskTwoArray[taskTwoArray.length - 1]; i++) {
  filledSortedArray.push(i); // Push each number into the filled array
}

// Print the resulting array with filled and sorted numbers
console.log(filledSortedArray); //Output: [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]

function taskTwoTest() {
    // Get the value from the input field
    var inputText = document.getElementById("taskTwoArray").value;
  
    // Convert the input string to an array of numbers
    var taskTwoArray = inputText.split(',').map(Number);
  
    var newArray = [];
    for (let i = taskTwoArray[0]; i <= taskTwoArray[taskTwoArray.length - 1]; i++) {
        newArray.push(i); // Push each number into the filled array
    }
  
    // Display the resulting array with filled and sorted numbers
    document.getElementById("outputTaskTwo").textContent = newArray.join(", ");
  }

