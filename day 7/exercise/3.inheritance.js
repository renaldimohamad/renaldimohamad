//NOTE

//inheritance adalah suatu mekanisme yang mengizinkan kita untuk menddefinisikan class berdasarkan class yang lain,
// atau class yang sudah ada bisa di sebut yang lebih parent


// CONTOH CLASS ELEMENT

// class Element {
//     type:
//     label:
// }

// class ElementExtended {
//     children:  
// }

//const elementExt = new Elementextended()


//  POLYMORPHISM CONTEPTS

// polimorfisme adalah kemampuan objek untuk mengambil berbagai bentuk. di OOP,
// polimorfisme memungkinkan objek dari kelas yang berbeda diperlakukan seolah - olah mereka berasal dari kelas yang sama, membuatnya lebih mudah untuk menulis kode yang fleksibel dan dapat digunakan kembali

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

