// Welcome to the example file for Object Orientated Programming (Part II).
// Please ensure that you have read through the task file (pdf) before continuing here as some of
// the examples and explanations assume you have done so.

// ************* HELP *****************
// REMEMBER THAT YOU IF YOU EVER NEED ANY HELP AT ALL, EMAIL US ON HELP@HYPERIONDEV.COM.
// ************************************

// ==== LET'S OOP! ====

// Breaking our programs into multiple classes (instead of doing everything in one big class) is an essential tool for
// managing bigger tasks with more complexity:

// We'll want our classes to encapsulate the data and the functionality for an object - the blueprint.
// Encapsulate means to enclose, as if in a capsule.
// One of the popular ways of figuring out how to break a complex system into more
// manageable components is to write this information on an index card that is divided into three parts:
// What is the name of the class?
// What responsibilities will it (or the objects we instantiate from it) have?
// What other (types of) objects will it collaborate with?

class Cow{
	_noise = "mooo!";

	constructor(colour){
	/**
    * This is the constructor for the class Cow.
    * A constructor creates a new instance of a class (see the introductory reading).

    * To instantiate a class with the constructor, you simply call the class name like a function:
	* blueCow = Cow('blue')
	*/
		this.colour = colour;
	}

	makeNoise(){
	/**
	* This method prints the cow's noise to the standard output...

    * A method is simply a function attached to an object (see reading).
    * In Javascript, methods and properties are accessed with the dot operator:
	* blueCow.makeNoise()
	*/
		console.log(this._noise);
	}
	setColour(newColour){
	/**
	* To paint the cow a different colour.
    * This method is meant to be an example of the way that methods can modify an object's state.

    * Get/set methods for object properties are a common sight in object-oriented code,
    * but in Javascript they are not really necessary because Javascript lacks something called privacy.
	*/
		this.colour = newColour;
	}
	getColour(){
		/**
		* This method returns the cow's color.
		*/
		return this.colour;
	}
}

blueCow = new Cow("Blue");
blueCow.makeNoise();

// ==== End of Trivial Example ====