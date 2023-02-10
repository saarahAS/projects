

function displayItem(item, listID) {
  // creating list element
  let htmlList = document.getElementById(listID);
  let listItem = document.createElement("li");
  listItem.innerHTML = item
  htmlList.appendChild(listItem);
}


// constructor function that will be used to create Book objects
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

function addIncome() {
  inc = JSON.parse(sessionStorage.getItem("income"));
  let newIncome = new Income(
    document.getElementById("name").value,
    document.getElementById("amount").value,
    document.getElementById("recurring").value,

  );
  inc.push(newIncome);
  sessionStorage.setItem("income", JSON.stringify(inc));
}
      



let income1 = new Income("salary", 3000, true);
let income2 = new Income("investments", 1000, true);
let income3 = new Income("projects", 500, false);
let income4 = new Income("rent", 500, true);
let income5 = new Income("benefits", 100, true);


function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}


let expense1 = new Expenses("rent", 1500, true);
let expense2 = new Expenses("bills", 500, true);
let expense3 = new Expenses("broadband", 100, false);
let expense4 = new Expenses("groceries", 400, true);
let expense5 = new Expenses("benefits", 100, true);


// let totalIncome = (income1.amount + income2.amount + income3.amount + income4.amount + income5.amount)
// console.log(totalIncome)

// let totalExpenses = (expense1.amount +expense2.amount +expense3.amount+expense4.amount+expense5.amount)
// console.log(totalExpenses)

// let disposableIncome = totalIncome - totalExpenses
// console.log(disposableIncome)

// let inputIncome = prompt("Add another entry to Income")
// let inputExpense = prompt("Add another entry to Expenses");
let incomeArray =[income1, income2, income3, income4, income5]
let expenseArray = [expense1, expense2, expense3, expense4, expense5]

function myLoad() {
  for (let i = 0; i < incomeArray.length; i++) {
    const income = incomeArray[i];

let item = `Income: ${JSON.stringify(
      income.name
    )}<br>Amount: ${JSON.stringify(
      income.amount
    )}<br>Recurring payment:${JSON.stringify(
      income.recurring
    )}<br><br>`;

displayItem(item, "incomeList")
}}

