// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    var isValid = regex.test(url);
  
    if (isValid) {
      console.log("The URL is a valid LinkedIn profile URL.");
    } else {
      console.log("The URL is not a valid LinkedIn profile URL.");
    }
  }
  
  // Call the validateLinkedInURL function with example URLs
  var url1 = "https://www.linkedin.com/in/john-doe";
  var url2 = "https://www.linkedin.com/in/jane_doe_123";
  var url3 = "https://www.linkedin.com/in/invalid_url";
  validateLinkedInURL(url1);
  validateLinkedInURL(url2);
  validateLinkedInURL(url3);
  