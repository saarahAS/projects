// ************* HELP *****************
// REMEMBER THAT YOU IF YOU EVER NEED ANY HELP AT ALL, EMAIL US ON HELP@HYPERIONDEV.COM.
// ************************************

class Student{
	//This is the constructor of this class
	constructor(age, name, gender, grades){
		/*
			Below we are initialising the attributes of the class. notice the this key word refering to the current object
		*/
		this.age = age;
		this.name = name;
		this.gender = gender;
		this.grades = grades;
	}
	//The function below calculate the average of the current student.
	computeAverage(){
		var total = 0;
		for(var i = 0; i < this.grades.length; i++){
			total += this.grades[i];
		}
		var average = total / this.grades.length
		console.log("The avarage for "+ this.name + " is "+ average);
	}
}

//creating an object of student called philani
philani = new Student(20, "Philani Sithole", "Male",[64, 66]);
//creating an object of student called sarah
sarah = new Student(19, "Sarah Jones", "Female", [82, 58]);
//creating an object of student called pieter
pieter = new Student(18, "Pieter Viljoen", "Non-binary", [70, 54]);

//using the objects to execute the average of the student.
philani.computeAverage();
sarah.computeAverage();
pieter.computeAverage();

//======End Of Student Class=========