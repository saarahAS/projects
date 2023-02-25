let savedRecipes = [];

function loadRecipes() {
  // console.log(savedRecipes)

  savedRecipes = JSON.parse(sessionStorage.getItem("recipesLocalStorage"));
  console.log(savedRecipes)
}

// console.log(savedRecipes)
// create img element
// fill element with savedRecipes[i]
function onLoad() {
  loadRecipes()


  for (i = 0; i < savedRecipes.length; i++) {

    console.log("hello")

    let article = document.createElement("article");
    let img = document.createElement("img");
    img.className = "recipeImage";
    const recipe = savedRecipes[i];
    const { name, src } = recipe;
    img.src = src;
    img.alt = name;
    article.appendChild(img);
    console.log("hello")

    let imageGrid = document.getElementById("imageGrid");
    imageGrid.appendChild(article);

  }
}
