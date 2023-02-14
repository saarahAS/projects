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

    img.src = recipes[i].src;
    img.alt = recipes[i].name;
    article.appendChild(img);

    let imageGrid = document.getElementById("imageGrid");
    imageGrid.appendChild(article);
  }
}
