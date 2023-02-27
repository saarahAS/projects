const recipes = [
  { name: "salad", src: "../images/pexels-julie-aagaard-2097090.jpg" },
  { name: "pancakes", src: "../images/pexels-ash-376464.jpg" },
  { name: "pasta", src: "../images/pexels-engin-akyurt-1527603.jpg" },
];

// empty arrays to fill with saved items, liked items and user comments
let savedRecipes = [];
let likedRecipes = [];
let commentArray = [];

function onLoad() {
  // for loop to create images
  for (let i = 0; i < recipes.length; i++) {
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.className = "recipeImage";
    const recipe = recipes[i];
    const { name, src } = recipe;
    img.src = src;
    img.alt = name;
    article.appendChild(img);

    // creating save for later button to save recipe
    let saveForLater = document.createElement("button");
    saveForLater.className = "saveForLater";
    article.appendChild(saveForLater);
    saveForLater.textContent = "save";
    saveForLater.addEventListener("click", () => {
      saveRecipe(recipe);
      alert(`You have ${savedRecipes.length} saved recipe/s.`);
      // change the button text for saved items
      saveForLater.textContent = "saved";
    });

    // creating like  button to like recipe
    let likeButton = document.createElement("button");
    likeButton.className = "likeButton";
    article.appendChild(likeButton);
    likeButton.textContent = "like";
    likeButton.addEventListener("click", () => {
      likeRecipe(recipe);
      alert(`You have ${likedRecipes.length} liked recipe/s.`);
      // change the button text for liked items
      likeButton.textContent = "liked";
    });
    let imageGrid = document.getElementById("imageGrid");
    imageGrid.appendChild(article);
  }

  // displaying comments from local storage
  commentArray = JSON.parse(localStorage.getItem("comments"));
  if (commentArray === null) {
    commentArray = [];
  }

  for (let i = 0; i < commentArray.length; i++) {
    displayItem(commentArray[i], i);
  }
}

// function to like recipe
function likeRecipe(recipe) {
  likedRecipes.push(recipe);
}
// function to save recipe
function saveRecipe(recipe) {
  savedRecipes.push(recipe);
  // saving recipe to local storage
  localStorage.setItem("recipesLocalStorage", JSON.stringify(savedRecipes));
}

//code for comment section below

// function to submit submit comments linked to submit button in html
function submitComment() {
  addComment();
}

// function to add and display comments
const addComment = () => {
  let comment = document.getElementById("commentBox");
  let commentContent = comment.value;
  commentArray.push(commentContent);
  console.log(commentArray);
  comment.value = "";
  let i = commentArray.length - 1;
  displayItem(commentArray[i], i);
  // storing comments to local storage
  localStorage.setItem("comments", JSON.stringify(commentArray));
};

// function to display comments
function displayItem(item, index) {
  // creating list element
  let commentSection = document.getElementById("commentSection");
  let comment = document.createElement("li");
  comment.id = `userComment${index}`;
  comment.textContent = commentArray[index];
  commentSection.appendChild(comment);
}
