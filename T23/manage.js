// Capstone Project 3 - OOP

// Pay compnesation calculator for different types of employees

// Parent class contains common constructor of the 3 types of employees
class Employee {
  constructor(name, numberOfSales, salesTarget) {
    this.name = name;
    this.numberOfSales = numberOfSales;
    this.salesTarget = salesTarget;
  }
  // methods to calculate the payout for each employee and display it with their details
  calculatePayout() {}
  display() {
    console.log(
      `Employee name: ${this.name} - Employee type: ${
        this.constructor.name
      } - Payout: £${this.calculatePayout().toFixed(2)}\n`
    );
  }
}

class SalariedEmployee extends Employee {
  constructor(name, salary, numberOfSales, salesTarget) {
    super(name, numberOfSales, salesTarget);
    this.salary = salary;
  }

  // overriding method from parent class
  calculatePayout() {
    // if sales target is exceeded, salary increases by 10%
    if (this.numberOfSales > this.salesTarget) {
      return this.salary * 1.1;
    } else {
      return this.salary;
    }
  }
}

class HourlyEmployee extends Employee {
  constructor(name, payPerHour, hours, numberOfSales, salesTarget) {
    super(name, numberOfSales, salesTarget);
    this.payPerHour = payPerHour;
    this.hours = hours;
  }
  calculatePayout() {
    let salary = this.payPerHour * this.hours;

    // if sales target is exceeded, salary increases by 50%
    if (this.numberOfSales > this.salesTarget) {
      return salary * 1.5;
    } else {
      return salary;
    }
  }
}

class HybridEmployee extends Employee {
  constructor(
    name,
    salary,
    payPerHour,
    additionalHours,
    numberOfSales,
    salesTarget
  ) {
    super(name, numberOfSales, salesTarget);
    this.salary = salary;
    this.payPerHour = payPerHour;
    this.additionalHours = additionalHours;
  }
  calculatePayout() {
    let payout = this.salary + this.payPerHour * this.additionalHours;

    // if sales target is exceeded, salary increases by 20%
    if (this.numberOfSales > this.salesTarget) {
      return payout + (this.salesTarget - this.numberOfSales * 1.2);
    } else {
      return payout;
    }
  }
}

// 2 instances of each kind of employee

// name, salary, numberOfSales, salesTarget
let employee1 = new SalariedEmployee("James", 2000, 110, 100);
let employee2 = new SalariedEmployee("Joe", 2000, 60, 100);

// name, payPerHour, hours, numberOfSales, salesTarget
let employee3 = new HourlyEmployee("Hannah", 10, 40, 105, 100);
let employee4 = new HourlyEmployee("Heidi", 12, 45, 120, 100);

//  name, salary, payPerHour, additionalHours, numberOfSales, salesTarget
let employee5 = new HybridEmployee("Cara", 1000, 10, 10, 80, 100);
let employee6 = new HybridEmployee("Cam", 1500, 13, 2, 102, 100);

employee1.display();
employee2.display();
employee3.display();
employee4.display();
employee5.display();
employee6.display();
