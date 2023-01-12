// Capstone Project 3

// Pay compnesation calculator for different types of employees

class employeeName {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //type of employee
  }
}

class typeOfEmployee extends employeeName {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
    //sales target
  }
}
