let htmlList = document.getElementById("myList");

let groceries = ["apples", "bananas", "bread", "milk"];

// function to create list element and add each item to unordered list
function displayItem(item, index) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;

  listItem.id = `groceryList${index}`;
  //adding new list item as child to <ul>
  htmlList.appendChild(listItem);

  let spanElement = document.createElement("span");
  spanElement.className = "close";
  spanElement.innerHTML = "\u00d7";
  spanElement.addEventListener("click", () => deleteItem(index));
  listItem.appendChild(spanElement);
}

const deleteItem = (index) => {
  // removing item from array
  console.log("deleting", index);
  groceries.splice(index, 1);
  let item = document.getElementById(`groceryList${index}`);
  item.remove();
};
for (let i = 0; i < groceries.length; i++) {
  displayItem(groceries[i], i);
}
// updateList(){
  let listItem = document.createElement("li");

// get value of text in <input? and add it to array
// if <input> is empty display alert to inseert item. else input text to array
//reset input text value to ""
// }

// let item1 = document.getElementById("0");
// let item2 = document.getElementById("1");

// //rewriting elements with strikethroughs
// item1.innerHTML = item1.innerHTML.strike();
// item2.innerHTML = item2.innerHTML.strike();

// let items = document.getElementsByTagName("li");
// for (let i = 0; i < items.length; i++) {
//   let span = document.createElement("span" class = "close")
// }
