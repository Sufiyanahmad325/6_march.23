// Store's list of items and prices in USD
var items = {
    apple: 2.5,
    banana: 1.75,
    orange: 3.0,
    mango: 4.5
  };
  
  // Conversion function to convert USD to INR
  function convertToRupees(price) {
    var exchangeRate = 80;
    return price * exchangeRate;
  }
  
  // Use map to create a new object with converted prices in Rupees
  var convertedItems = Object.keys(items).map(function(item) {
    return { item: item, price: convertToRupees(items[item]) };
  });
  
  // Output the converted prices
  console.log(convertedItems);
  