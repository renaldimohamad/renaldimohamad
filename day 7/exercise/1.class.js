//adalah suatu konvensi atau sebauh aturan yang di anjurkan, yang mana di setiap claas huruf depannya harus menggunakan huruf besar (kapital)
//dalam sebuah oop atau dalam sebuah class ada yang namanya spesial funcitional, funcitional yang khusus dan bukan hanya sembarang funcition, funcition khusus yaitu (constructor)


class Car {
    make = ""
    model = ""


    constructor(make, model, color) {
        this.make = make
        this.model = model
    }
    getInfo() {
        return `The car is a ${this.make} ${this.model}`
    }

}


const car1 = new Car("Toyota", "Camry")
console.log(car1.getInfo())


const car2 = new Car("Honda", "ABC",)
console.log(car2.getInfo())




class ElectricCar extends Car {
    batteryCapacity = ""

    constructor(make, model, batteryCapacity) {
        super(make, model)
        this.batteryCapacity = batteryCapacity
    }

    getInfo() {
        return `${super.getInfo()}. It has a battery capacity off ${this.batteryCapacity} kwh.`
    }
}

const electricCar = new ElectricCar("Tesla", "Model S", 100)
console.log(electricCar.getInfo())



