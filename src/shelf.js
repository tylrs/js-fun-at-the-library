function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
      break;
    }
  };
};

function listTitles(shelf) {
  var listOfBooks = [];
  for (i = 0; i < shelf.length; i ++) {
    listOfBooks.push(shelf[i].title);
  };
  return listOfBooks.join(', ');
};

function searchShelf(shelf, bookName) {
  for(i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === bookName) {
      var isAMatch = true;
      break;
    } else {
      isAMatch = false;
    }
  } return isAMatch;
};
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
