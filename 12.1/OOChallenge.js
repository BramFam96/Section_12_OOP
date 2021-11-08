class Garage {
	constructor(c) {
		if (c <= 0 || typeof c !== 'number') {
			throw new Error('Garage capacity must be a number and at least one')
		}
		this.vehicles = []
		this.c = c
	}
	add(vehicle) {
		let { vehicles, c } = this
		if (!(vehicle instanceof Vehicle)) {
			return 'Nice try. But we only store vehicles'
		}
		if (vehicles.length === c) {
			return 'Garage is full!'
		}
		vehicles.push(vehicle)
	}
	clear() {
		this.vehicles = []
	}
}

class Vehicle {
	constructor(make, model, year) {
		if (typeof make !== 'string' || typeof model !== 'string') {
			throw new Error('Vehicle make and model must be strings')
		}
		if (typeof year !== 'number' || year < 1900 || year > 2025) {
			throw new Error('Vehicle year must be a number between 1900 and 2025')
		}
		this.make = make
		this.model = model
		this.year = year
	}
	honk() {
		return 'Beep'
	}
	toString() {
		const { make, model, year } = this
		return `This vehicle is a ${year} ${make} ${model}`
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year)
		this.numWheels = 4
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year)
		this.numWheels = 2
	}
	revEngine() {
		return 'VROOOOM!'
	}
}
let v1 = new Car('asd', 'ddd', 2004)
let g1 = new Garage(1)
