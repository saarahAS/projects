const BOOKS_KEY = "books";
const HAS_CODE_RUN_BEFORE_KEY = "hasCodeRunBefore";

function loadBookList() {
  let htmlSelect = document.getElementById("bookList");
  htmlSelect.style.visibility = "hidden";

  if (sessionStorage.getItem(HAS_CODE_RUN_BEFORE_KEY) === null) {
    // Initializing upon first page load
    const bookArray = [];
    sessionStorage.setItem(BOOKS_KEY, "[]");
    sessionStorage.setItem(HAS_CODE_RUN_BEFORE_KEY, true);
  } else {
    // Retrieving the books from storage and displaying it to the user
    let booksArray = JSON.parse(sessionStorage.getItem(BOOKS_KEY)); //Get the array of person objects from sessionStorage and assign it to the array 'pers'
    for (let i = 0; i < booksArray.length; i++) {
      const book = booksArray[i];
      let listItem = document.createElement("li");
      listItem.innerHTML = `Title: ${JSON.stringify(book.title)} Author: ${
        book.author
      } Genre: ${book.genre} Review: ${book.review} Rating: ${book.rating}`;
      listItem.value = i;
      htmlSelect.appendChild(listItem);
    }
    if (booksArray.length > 0) {
      //Only make the select element visible once there is at least one person object added that the user can select.
      htmlSelect.style.visibility = "visible";
    }
  }
}

function Book(title, author, genre, review, rating) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.review = review;
  this.rating = rating;
}

function addBook() {
  book = JSON.parse(sessionStorage.getItem(BOOKS_KEY));
  let newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("genre").value,
    document.getElementById("review").value,
    document.getElementById("rating").value
  );
  book.push(newBook);
  sessionStorage.setItem(BOOKS_KEY, JSON.stringify(book));
}
