class Car {
    make = ""
    model = ""
    color = "red"

    constructor(make, model, color) {
        this.make = make
        this.model = model
        if (color) {
            this.color = color
        }
    }

    getInfo() {
        return `The car is a ${this.make} ${this.model}`
    }
}


const car1 = new Car("Toyota", "Camry")
console.log(car1.getInfo())

const car2 = new Car("Honda", "ABC",)
console.log(car2.getInfo())