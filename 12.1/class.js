//We create constructors with the class keyword. Notice this is capitalized, and not a func;
class Triangle {
	constructor(a, b, c) {
		for (let length of [a, b, c]) {
			if (!Number.isFinite(length) || length <= 0) {
				//Important do not return anything!
				//Returning a val from a constructor will not prevent a new obj from being instantantiated;
				//Instead, our new instantiated obj would only have the properties prior to our return;
				throw new Error('Invalid length parameter')
			}
		}
		this.a = a
		this.b = b
		this.c = c
	}

	getArea() {
		const { a, b, c } = this
		const s = (a + b + c) / 2
		//Methods DO return;
		return Math.sqrt(s * (s - a) * (s - b) * (s - c))
	}
	display() {
		const { a, b, c } = this
		return `Triangle with sides of ${a}, ${b}, ${c}`
	}
	///These methods are saved to the prototype;
}

//This is also not a triangle in itself. It is the blueprint for new Triangles.
//We instantantiate new Triangles with:
let t1 = new Triangle(5, 9, 10)
//Extends Intro
class RightTriangle extends Triangle {
	//extending triangle gives our RightTriangles the methods we defined previously;
	constructor(a, b, c) {
		//super function alone will return our Triangle class;
		//notice it is a function, we pass it the values bound to this that we want access to.
		super(a, b, c)
		if (a * a + b * b !== c * c) {
			throw new Error('invalid triangle')
		}
	}
	isRightTriangle() {
		return true
	}
	display() {
		//notice we are accessing a super obj, not a super function;
		//methods are called with this syntax.
		return 'Right ' + super.display()
	}
	//super calls our parent constructor. This is what allows us to eliminate all
	//duplicate code inside our constructor including reassigning a,b,c;
	//We can also override our methods here:
}
let t2 = new RightTriangle(3, 4, 5)
