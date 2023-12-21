//ENCAPSULATION 

class Car {
    isRuning = false

    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        this.isRuning = true
    }

    checkBensin() {
        this.isRuning = `cek bensin nya dulu bro`
    }

    testi() {
        this.isRuning = `hey hati hati bro`
    }

    warning() {
        this.isRuning = `hey mobil anda mencapai kecepatan tinggi`
    }
    stop() {
        this.isRuning = false
    }

    getInfo() {
        return `${this.make} ${this.model} ${this.isRuning}`
    }

}

const car1 = new Car("Toyota", "Camry")

car1.start()
console.log(car1.getInfo())
car1.stop()
console.log(car1.getInfo())
car1.checkBensin()
console.log(car1.getInfo())
car1.testi()
console.log(car1.getInfo())
car1.warning()
console.log(car1.getInfo())


