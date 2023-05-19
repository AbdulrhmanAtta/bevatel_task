// Create an array with duplicate numbers
const tastOneArray = [1, 2, 3, 2, 4, 5, 5, 6, 2, 3, 4, 4, 4];

// a Set to remove duplicates and convert it back to an array
const NumbersSet = new Set(tastOneArray);
const newArray = [...NumbersSet];

// Sort the array in ascending order
const results = newArray.sort((a, b) => a - b);

// Print the resulting array without duplicate numbers and sorted
console.log(results); //Output: [ 1, 2, 3, 4, 5, 6 ]

function taskOneTest() {
    // Get the value from the input field
    var inputText = document.getElementById("taskOneInput").value;
  
    // Convert the input string to an array of numbers
    var tastOneArray = inputText.split(',').map(Number);
  
    var NumbersSet = new Set(tastOneArray);
    var newArray = [...NumbersSet];
    var results = newArray.sort((a, b) => a - b);
  
    // Display the resulting array without duplicate numbers and sorted
    document.getElementById("outputTaskOne").textContent = results.join(", ");
  }