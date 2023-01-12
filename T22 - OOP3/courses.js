// OOP3

// Demonstrating inheritance by reusing parts of code from parent to child class and displaying information from both classes

// created class constructor with details of Course
class Course {
  constructor(courseName, contactWebsite) {
    this.courseName = courseName;
    this.contactWebsite = contactWebsite;
  }

  // method to display course details
  display() {
    console.log(`This is the ${this.contactWebsite} for ${this.courseName}\n`);
  }
}

// subclass of subjects extending from parent class with additional details added
class Subject extends Course {
  constructor(courseName, contactWebsite, teacherName, subjectName) {
    super(courseName, contactWebsite);
    this.teacherName = teacherName;
    this.subjectName = subjectName;
  }

  // overriding display method from parent class as those details are also included in this output
  display() {
    console.log(
      `Subject: ${this.subjectName} - Course: ${this.courseName} - Teacher: ${this.teacherName} - Find course support at: ${this.contactWebsite}\n`
    );
  }
}

// 3 instances of Subject
subject1 = new Subject("English", "www.hyperiondev.com", "Ms Smith", "Reading");
subject2 = new Subject("English", "www.hyperiondev.com", "Ms Jones", "Grammar");
subject3 = new Subject("English", "www.hyperiondev.com", "Ms Wade", "Writing");

// calling display method from Subject subclass
subject1.display();
subject2.display();
subject3.display();
