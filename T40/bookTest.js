let booksArray = []; // empty array that stores all the Book objects created.

function myLoad() {
  let bookList = document.getElementById("bookList");
  //   bookList.style.visibility = "hidden";

  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("books", JSON.stringify(booksArray));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    booksArray = JSON.parse(sessionStorage.getItem("books")); //Get the array of person objects from sessionStorage and assign it to the array 'pers'
    for (let i = 0; i < booksArray.length; i++) {
      const book = booksArray[i];

      let listItem = document.createElement("li");
      listItem.innerHTML = `Title: ${JSON.stringify(
        book.title
      )}<br>Author: ${JSON.stringify(book.author)}<br>Genre: ${JSON.stringify(
        book.genre
      )}<br>Review: ${JSON.stringify(book.review)}<br>Rating:${JSON.stringify(
        book.rating
      )}<br><br>`;
      let deleteBook = document.createElement("button");
      deleteBook.innerHTML = "Delete";

      deleteBook.addEventListener("click", () => {
        listItem.remove();
        let updatedBookArray = booksArray.splice(i, 1);
        // console.log(`deleted: ${JSON.stringify(updatedBookArray)}`);
        // console.log(`remaining: ${JSON.stringify(booksArray)}`);
        sessionStorage.setItem("books", JSON.stringify(booksArray));
      });
      let headerRow = document.createElement("hr");

      const editBook = document.createElement("button");
      editBook.innerHTML = "Edit";

      editBook.addEventListener("click", () => {
        const edit = prompt(
          "Which category would you like to edit? Please enter: Title, Author, Genre, Review or Rating."
        ).toLowerCase();

        switch (edit) {
          case "title":
            const editTitle = prompt("Please enter the edited title name.");
            book.title = editTitle;
            sessionStorage.setItem("books", JSON.stringify(booksArray));
            //auto refresh page to display the change. learnt from: https://www.w3schools.com/jsref/met_loc_reload.asp
            location.reload();
            break;
          case "author":
            const editAuthor = prompt("Please enter the edited author name.");
            book.author = editAuthor;
            sessionStorage.setItem("books", JSON.stringify(booksArray));
            location.reload();
            break;
          case "genre":
            const editGenre = prompt("Please enter the edited genre.");
            book.genre = editGenre;
            sessionStorage.setItem("books", JSON.stringify(booksArray));
            location.reload();
            break;
          case "review":
            const editReview = prompt("Please enter the edited review.");
            book.review = editReview;
            sessionStorage.setItem("books", JSON.stringify(booksArray));
            location.reload();
            break;
          case "rating":
            const editRating = prompt(
              "Please enter the edited rating as a number from 1-5."
            );
            if (isNaN(editRating)) {
              alert("Error. Please enter a number from 1-5");
            } else if (editRating < 1 || editRating > 5) {
              alert("Error. Please enter a number from 1-5");
            } else if (editRating >= 1 || editRating >= 5) {
              book.rating = editRating;
            }

            sessionStorage.setItem("books", JSON.stringify(booksArray));
            location.reload();
            break;

          // error if unexpected input
          default:
            alert("Error: Invalid entry. Please try again.");
            break;
        }
        console.log("edited");
      });
      listItem.appendChild(editBook);
      listItem.appendChild(deleteBook);

      listItem.appendChild(headerRow);
      bookList.appendChild(listItem);
    }

    // if (booksArray.length > 0) {
    //   //Only make the select element visible once there is at least one Book object added
    //   bookList.style.visibility = "visible";
    // }
  }
}

// constructor function that will be used to create Book objects
function Book(title, author, genre, review, rating) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.review = review;
  this.rating = rating;
}

function addBook() {
  book = JSON.parse(sessionStorage.getItem("books"));
  let newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("genre").value,
    document.getElementById("review").value,
    document.getElementById("rating").value
  );
  book.push(newBook);
  sessionStorage.setItem("books", JSON.stringify(book));
}
