function displayItem(item, listID) {
  // creating list element
  let htmlList = document.getElementById(listID);
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  htmlList.appendChild(listItem);
}

// constructor function that will be used to create income objects
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// 5 instances of income objects
let income1 = new Income("salary", 3000, true);
let income2 = new Income("investments", 1000, true);
let income3 = new Income("projects", 500, false);
let income4 = new Income("rent", 500, true);
let income5 = new Income("benefits", 100, true);

// constructor function that will be used to create expenses objects
function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// 5 instances of expenses objects
let expense1 = new Expenses("rent", 1500, true);
let expense2 = new Expenses("bills", 500, true);
let expense3 = new Expenses("broadband", 100, false);
let expense4 = new Expenses("groceries", 400, true);
let expense5 = new Expenses("benefits", 100, true);

// empty arrays to build objects into
let incomeArray = [];
let expenseArray = [];

// sum of array method from: https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-arrayß
const calculateSum = (obj) =>
  obj.map((items) => items.amount).reduce((prev, curr) => prev + curr, 0);

// to load the page
function myLoad() {
  // to load income
  loadIncome();

  // clearing list so that it doesnt all replicate when user adds another income object
  clearList("incomeList");

  // for loop to display income objects
  for (let i = 0; i < incomeArray.length; i++) {
    const income = incomeArray[i];

    let item = `Name: ${JSON.stringify(
      income.name
    )}<br>Amount: ${JSON.stringify(
      income.amount
    )}<br>Recurring payment:${JSON.stringify(income.recurring)}<br><br>`;

    displayItem(item, "incomeList");
  }

  loadExpenses();
  clearList("expensesList");
  for (let i = 0; i < expenseArray.length; i++) {
    const expense = expenseArray[i];

    let item = `Name: ${JSON.stringify(
      expense.name
    )}<br>Amount: ${JSON.stringify(
      expense.amount
    )}<br>Recurring payment:${JSON.stringify(expense.recurring)}<br><br>`;

    displayItem(item, "expensesList");
  }

  // calculating disposable income
  const disposableIncome = document.getElementById("disposableIncome");
  disposableIncome.innerHTML =
    calculateSum(incomeArray) - calculateSum(expenseArray);
}

// clear list function to avoid replicated display
function clearList(listID) {
  let htmlList = document.getElementById(listID);
  htmlList.innerHTML = "";
}

// function for prompts to add income object
function addIncome() {
  let incomeName = prompt("Please enter income name");
  let incomeAmount = Number(prompt("Please enter income amount"));
  let incomeRecur =
    prompt("Please Y/N if income is recurring.").toUpperCase() == "Y";

  let newIncome = new Income(incomeName, incomeAmount, incomeRecur);
  // pusing user input to array
  incomeArray.push(newIncome);
  // saving user inputted object to sessio storage
  saveIncomes();
  myLoad();
}

// function for prompts to add expense object
function addExpense() {
  let expenseName = prompt("Please enter expense name");
  let expenseAmount = Number(prompt("Please enter expense amount"));
  let expsenseRecur =
    prompt("Please Y/N if income is recurring.").toUpperCase() == "Y";

  let newExpense = new Expenses(expenseName, expenseAmount, expsenseRecur);
  // pusing user input to array
  expenseArray.push(newExpense);
  // saving user inputted object to session storage
  saveExpenses();
  myLoad();
}

// function for user to move money from disposable income to savings - will alert remaining disposable income
function assignSavings() {
  let savingsAmount = Number(prompt("Please enter amount to add to savings"));
  let totalIncome = calculateSum(incomeArray);
  let totalExpenses = calculateSum(expenseArray);
  let disposableIncome = totalIncome - totalExpenses;
  let remaining = disposableIncome - savingsAmount;
  // disposable income must be more than or equal to amount moved to savings
  if (savingsAmount <= disposableIncome) {
    alert(`Disposable income remaining: ${remaining}`);
  } else {
    alert("Amount must be less than or equal to disposable income");
  }
}

// creating session storage for income and expenses

function loadIncome() {
  let incomes = sessionStorage.getItem("incomes");
  if (incomes === null) {
    // if incomes don't exist in session storage, load it with sample data
    incomeArray = [income1, income2, income3, income4, income5];
    saveIncomes();
  } else {
    incomeArray = JSON.parse(sessionStorage.getItem("incomes"));
  }
}

function saveIncomes() {
  sessionStorage.setItem("incomes", JSON.stringify(incomeArray));
}

function loadExpenses() {
  let expenses = sessionStorage.getItem("expenses");
  if (expenses === null) {
    // if expenses don't exist in session storage, load it with sample data
    expenseArray = [expense1, expense2, expense3, expense4, expense5];
    saveExpenses();
  } else {
    expenseArray = JSON.parse(sessionStorage.getItem("expenses"));
  }
}

function saveExpenses() {
  sessionStorage.setItem("expenses", JSON.stringify(expenseArray));
}
