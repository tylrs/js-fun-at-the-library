function createLibrary(libraryName) {
  var library = {};
  library.name = libraryName;
  library.shelves = {};
  library.shelves.fantasy = [];
  library.shelves.fiction = [];
  library.shelves.nonFiction = [];
  return library;
};

function addBook(library, book) {
  library.shelves[book.genre].unshift(book);
};

function checkoutBook(library, requestedBookTitle, requestedGenreType) {
      for (i = 0; i < library.shelves[requestedGenreType].length; i++) {
        if (library.shelves[requestedGenreType][i].title === requestedBookTitle) {
          library.shelves[requestedGenreType].splice(i, 1);
          return `You have now checked out ${requestedBookTitle} from the ${library.name}`;
        };
      }; return`Sorry, there are currently no copies of ${requestedBookTitle} available at the ${library.name}`;
  };
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
