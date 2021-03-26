function createLibrary(name) {
  var library = {};
  library.name = name;
  library.shelves = {};
  library.shelves.fantasy = [];
  library.shelves.fiction = [];
  library.shelves.nonFiction = [];
  return library;
};

function addBook(library, book) {
  for(var shelfGenre in library.shelves) {
      if (shelfGenre === book.genre) {
        library.shelves[shelfGenre].unshift(book);
      }
    }
};

function checkoutBook(library, requestedBookTitle, requestedGenreType) {
    if (library.shelves[requestedGenreType].length === 0) {
      return `Sorry, there are currently no copies of ${requestedBookTitle} available at the ${library.name}`;
    } else if (library.shelves[requestedGenreType][0].title === requestedBookTitle) {
      library.shelves[requestedGenreType].pop();
      return `You have now checked out ${requestedBookTitle} from the ${library.name}`;
    };

};
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
