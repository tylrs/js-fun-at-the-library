function createTitle(title) {
  var newTitle = `The ${title}`
  return newTitle;
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter;
};

function saveReview(reviewText, reviews) {
  if (reviews.indexOf(reviewText) < 0) {
    reviews.push(reviewText);
  };
};

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
  return book;
};
function editBook(book) {
  book.pageCount *= 0.75;
};
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
