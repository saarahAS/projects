let htmlList = document.getElementById("myList");

let groceries = ["apples", "bananas", "bread", "milk"];

// for loop to create list element and add each item to unordered list
for (let i = 0; i < groceries.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = groceries[i];

  listItem.id = i;
  //adding new list item as child to <ul>
  htmlList.appendChild(listItem);
}

let item1 = document.getElementById("0");
let item2 = document.getElementById("1");

//rewriting elements with strikethroughs
item1.innerHTML = item1.innerHTML.strike();
item2.innerHTML = item2.innerHTML.strike();

let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
  let span = document.createElement("span" class = "close")
}