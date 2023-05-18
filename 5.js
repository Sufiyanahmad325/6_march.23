// Function to check if a URL matches the conditions
function checkURL(url) {
    var regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;
    var isValid = regex.test(url);
  
    if (isValid) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  }
  
  // Call the checkURL function with an example URL
  var url = "http://www.example.com";
  checkURL(url);
  