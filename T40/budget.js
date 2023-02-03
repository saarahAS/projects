let incomeArray =[]
let expenseArray = []

function myLoad() {
  let incomeList = document.getElementById("incomeList");

  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("income", JSON.stringify(incomeArray));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    incomeArray = JSON.parse(sessionStorage.getItem("income")); //Get the array of person objects from sessionStorage and assign it to the array 'pers'
    for (let i = 0; i < incomeArray.length; i++) {
      const inc = incomeArray[i];

      let listItem = document.createElement("li");
      listItem.innerHTML = `Income: ${JSON.stringify(
        income1.name
      )}<br>Genre: ${JSON.stringify(
        income1.amount
      )}<br>Rating:${JSON.stringify(
        income1.recurring
      )}<br><br>`;
      // let deleteBook = document.createElement("button");
      // deleteBook.innerHTML = "Delete";

      console.log(listItem)
}}}

constructor function that will be used to create Book objects
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
