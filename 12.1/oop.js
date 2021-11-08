/*
OOP

Up until now, every obj and array we've hard coded has been an instance of the object constructor
OOP allows us to define object constructors ourselves, predefined with methods and structures,
so we may blueprint and create object instances as neccessary. 

Constructor Intro

The constructors we've encountered so far are Math. String. Array. Obj. etc; 
We will be practicing creating our own constructors.

This Intro - mixing data and funcitonality;

This allows methods to access other methods and datatypes within 
the constructor its defined. ie this is equal to the function itself;
ie */
const triangle = {
	a: 3,
	b: 4,
	getArea() {
		return (this.a + this.b) / 2
	},
	getHyp() {
		return Math.sqrt(this.a ** 2 + this.b ** 2)
	},
}

//Behind the scenes - a triangle constructor might look like this:

function Triangle(a, b) {
	//notice the funciton is capitalized; signifying this is not simply a func;
	this.a = a
	this.b = b
	this.getArea = function () {
		return (this.a * this.b) / 2
	}
	this.getHyp = function () {
		return Math.sqrt(this.a ** 2 + this.b ** 2)
	}
}

// Triangle(3, 4)
//This does not actually return anything; A constructor is called with new;
//ie
t1 = new Triangle(3, 4)
//We've created an instance of, or instantialized our triangle constructor- the triangle exists!
//Each new triangle we create will have the method getArea and getHyp built in;
/*

Prototype Intro

When we call a prebuilt constructor its methods are not directly on it in the way they are on our
Triangle above. Instead methods on maps, set, arr, objs, nums, etc are held in a property called
Prototype; Methods like add, delete, forEach, etc are found here.
In our triangle constructor we are instead creating function for each triangle individually.
Instead we should do this:
*/
function Triangle(a, b) {
	//notice the funciton is capitalized; signifying this is not simply a func;
	this.a = a
	this.b = b
}
Triangle.prototype.getArea = function () {
	return (this.a * this.b) / 2
}
Triangle.prototype.getHyp = function () {
	return Math.sqrt(this.a ** 2 + this.b ** 2)
}
//We no longer created a new instance of the same method on each triangle
//Instead they are referencing a single prototype;
//This is why we would use a class - the technical term for our constructors.
