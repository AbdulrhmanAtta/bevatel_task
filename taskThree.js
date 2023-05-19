// Define a function to calculate the value of a word
function calculateWordValue(word) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseWord = word.toLowerCase();
    let value = 0;
  
    // Loop through each character in the word
    for (let i = 0; i < lowercaseWord.length; i++) {
      const char = lowercaseWord[i];
      const index = alphabets.indexOf(char);
  
      // If the character is a letter, add its value to the total
      if (index !== -1) {
        value += index + 1;
      }
    }
  
    // Return the calculated value of the word
    return value;
  }
  
  // Define the words to calculate their values
  const word1 = 'Ali';
  const word2 = 'Bevatel';
  const word3 = 'Backend';
  
  // Print the calculated values of the words
  console.log(calculateWordValue(word1)); // Output: 22
  console.log(calculateWordValue(word2)); // Output: 67
  console.log(calculateWordValue(word3)); // Output: 40

  function taskThreeTest() {
    // Get the value from the input field
    var word = document.getElementById("taskThreeValue").value;
  
    // Call the calculateWordValue function to calculate the value of the word
    var value = taskThreeTestValue(word);
  
    // Display the calculated value
    document.getElementById("outputTaskThree").textContent = "The value of the word '" + word + "' is: " + value;
  }
  
  function taskThreeTestValue(word) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseWord = word.toLowerCase();
    let value = 0;
  
    // Loop through each character in the word
    for (let i = 0; i < lowercaseWord.length; i++) {
      const char = lowercaseWord[i];
      const index = alphabets.indexOf(char);
  
      // If the character is a letter, add its value to the total
      if (index !== -1) {
        value += index + 1;
      }
    }
  
    // Return the calculated value of the word
    return value;
  }