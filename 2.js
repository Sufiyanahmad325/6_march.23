// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Change 100 to set the desired range
  }
  
  // Function to display countdown message and generate random number
  function generateNumberWithDelay(delay) {
    var remainingTime = delay;
  
    var countdownInterval = setInterval(function() {
      console.log("Time remaining: " + remainingTime + " seconds");
      remainingTime--;
  
      if (remainingTime === 0) {
        clearInterval(countdownInterval);
        var randomNum = generateRandomNumber();
        console.log("Generated random number: " + randomNum);
      }
    }, 1000); // 1000 milliseconds = 1 second
  
    setTimeout(function() {
      clearInterval(countdownInterval);
      var randomNum = generateRandomNumber();
      console.log("Generated random number: " + randomNum);
    }, delay * 1000); // Convert delay to milliseconds
  }
  
  // Set the desired delay in seconds
  var delay = 3;
  
  // Call the generateNumberWithDelay function with the specified delay
  generateNumberWithDelay(delay);
  