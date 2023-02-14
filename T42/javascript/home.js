const recipes = [
  { name: "pancakes", src: "../images/pexels-julie-aagaard-2097090.jpg" },
  { name: "salad", src: "../images/pexels-ash-376464.jpg" },
  { name: "pasta", src: "../images/pexels-engin-akyurt-1527603.jpg" },
];

function onLoad() {
  for (i = 0; i < recipes.length; i++) {
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.className = "recipeImage";
    const { name, src } = recipes[i];
    img.src = src;
    img.alt = name;
    article.appendChild(img);

    let saveForLater = document.createElement("button");
    saveForLater.className = "saveForLater";
    article.appendChild(saveForLater);
    saveForLater.textContent = "save";
    saveForLater.addEventListener("click", () => {
      console.log(`${name} clicked`);
      //   listItem.remove();
      //   booksArray.splice(i, 1);
      //   sessionStorage.setItem("books", JSON.stringify(booksArray));
    });

    let imageGrid = document.getElementById("imageGrid");
    imageGrid.appendChild(article);
  }
}
