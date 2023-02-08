let htmlList = document.getElementById("itemList");

let groceries = ["apples", "bananas", "bread", "milk"];

// function to create list element and add each item to unordered list
function displayItem(item, index) {
  // creating list element
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  listItem.id = `groceryList${index}`;
  listItem.addEventListener("click", () => strikeItem(index))
  htmlList.appendChild(listItem);

  // creating span element
  let spanElement = document.createElement("span");
  spanElement.className = "close";
  spanElement.innerHTML = "\u00d7";
  spanElement.addEventListener("click", () => deleteItem(index));
  listItem.appendChild(spanElement);
}

// function to delete item 1) removed item from array 2) hiding parent display
const deleteItem = (index) => {
  groceries.splice(index, 1);
  let item = document.getElementById(`groceryList${index}`);
  // comment reason
  item.remove();
// item.style.display = "none";
};

const strikeItem = (index) => {
  let item = document.getElementById(`groceryList${index}`);
  item.className = item.className == "checked" ? "unchecked": "checked";

}
// for each item in the grocery list array, the displayItem function is called and a list and span item is created for it
for (let i = 0; i < groceries.length; i++) {
  displayItem(groceries[i], i);
}

// function to add item to list
const addItem = () => {
  let item = document.getElementById("input");
  let itemName = item.value;
  // if <input> tag is empty display alert to insert item
  if (item.value == "") {
    alert("Insert item to add to list");
    // else add inputted text to array
  } else {
    groceries.push(itemName);
    item.value = "";
    // display the updated list
    displayItem(groceries[groceries.length - 1], groceries.length - 1);
  }
};

const addItemOnEnter = (e) => {
if (e.key == "Enter") {
  addItem()
}
}