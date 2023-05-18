// Define the input string
var input = "Hello, world!";

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Delay function using setTimeout
function delayReverse(inputStr) {
  setTimeout(function() {
    var reversedStr = reverseString(inputStr);
    console.log(reversedStr);
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the delayReverse function with the input string
delayReverse(input);
