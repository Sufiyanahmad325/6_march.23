// Input list of books
var books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2012 },
    { title: "Book 5", author: "author 5", year: 2003 },
  ];
  
  // Function to filter and capitalize the author names
  function filterAndCapitalizeBooks(books) {
    var filteredBooks = books.filter(function(book) {
      return book.year >= 2010;
    });
  
    var capitalizedBooks = filteredBooks.map(function(book) {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
      };
    });
  
    return capitalizedBooks;
  }
  
  // Call the filterAndCapitalizeBooks function with the input list
  var filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  
  // Output the filtered and capitalized books
  console.log(filteredAndCapitalizedBooks);
  