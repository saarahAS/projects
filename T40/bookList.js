// empty array to store Book objects
let booksArray = []; 

function myLoad() {
  let bookList = document.getElementById("bookList");
  //   bookList.style.visibility = "hidden";

  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("books", JSON.stringify(booksArray));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    booksArray = JSON.parse(sessionStorage.getItem("books")); 
    // for loop to access each item in Book object and create elements for each of them
    for (let i = 0; i < booksArray.length; i++) {
      const book = booksArray[i];

      // creating list item and filling it with user input from form
      let listItem = document.createElement("li");
      listItem.innerHTML = `Title: ${JSON.stringify(
        book.title
      )}<br>Author: ${JSON.stringify(book.author)}<br>Genre: ${JSON.stringify(
        book.genre
      )}<br>Review: ${JSON.stringify(book.review)}<br>Rating:${JSON.stringify(
        book.rating
      )}<br><br>`;

      // creating delete button
      let deleteBook = document.createElement("button");
      deleteBook.innerHTML = "Delete";

      deleteBook.addEventListener("click", () => {
        listItem.remove();
        // removing item from array
        booksArray.splice(i, 1);
// updating session storage with new array without the deleted item 
        sessionStorage.setItem("books", JSON.stringify(booksArray));
      });

      // creating a line between each Book object
      let headerRow = document.createElement("hr");

      // creating edit button
      const editBook = document.createElement("button");
      editBook.innerHTML = "Edit";

      // on click, the page will prompt the user to enter what they would like to change
      editBook.addEventListener("click", () => {
        const edit = prompt(
          "Which category would you like to edit? Please enter: Title, Author, Genre, Review or Rating."
        ).toLowerCase();

        // another prompt to ask for edited item
        switch (edit) {
          case "title":
            const editTitle = prompt("Please enter the edited title name.");
            // redefining the item with the user input
            book.title = editTitle;
            // updating session storage to include the edited item
            sessionStorage.setItem("books", JSON.stringify(booksArray));
            //refresh page to display the change automatically. learnt from: https://www.w3schools.com/jsref/met_loc_reload.asp
            location.reload();
            break;

            //repeated logic for each item in Book object
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
            // to ensure input is a whole number
            if (!Number.isInteger(editRating)) {
              alert("Error. Please enter a whole number from 1-5");
              // to ensure input is between 1-5
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
      });

      // appending list item, header row, delete and edit buttons that were created above
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

// function to add user inputs into the displayed Book objects
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
