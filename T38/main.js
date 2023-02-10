let htmlList = document.getElementById("itemList");

let groceries = ["apples", "bananas", "bread", "milk"];

// function to create list element and add each item to unordered list
function displayItem(item, index) {
  // creating list element
  let listItem = document.createElement("li");
  listItem.id = `groceryList${index}`;
  htmlList.appendChild(listItem);

    // creating span element for list item
  let textElement = document.createElement("span");
  textElement.innerHTML = item
  textElement.addEventListener("click", () => strikeItem(index));
  listItem.appendChild(textElement);


  // creating span element for x 
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
  // using .remove to keep html and javascript index in sync (instead of style.display)
  item.remove();
// item.style.display = "none";
};

// function to change display to strike through item using css class
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

// add item to list if user presses Enter key
const addItemOnEnter = (e) => {
if (e.key == "Enter") {
  addItem()
}
}