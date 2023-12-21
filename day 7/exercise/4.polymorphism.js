//  POLYMORPHISM CONTEPTS

// polimorfisme adalah kemampuan objek untuk mengambil berbagai bentuk. di OOP,
// polimorfisme memungkinkan objek dari kelas yang berbeda diperlakukan seolah - olah mereka berasal dari kelas yang sama, membuatnya lebih mudah untuk menulis kode yang fleksibel dan dapat digunakan kembali


//override -> MENIMPA

// class Vehicle {

//     drive() {  //metod
//         return `The vehicle is driving`
//     }
// }

// class Car extends Vehicle { // Merupakan TURUNAN dari vehicle

//     drive() {

//         return `The car is driving.`
//     }
// }

// class ElectricCar extends Car {

//     drive() {
//         return `The electric car is driving silently`
//     }
// }

// const vehicle = new Vehicle()
// const car = new Car()
// const electricCar = new ElectricCar()

// console.log(vehicle.drive())
// console.log(car.drive())
// console.log(electricCar.drive())


class Motogp {
    drive() {
        return `The motogp is driving`
    }
}

class Moto extends Motogp {

    drive() {

        return `The Motogp one`
    }
}

const motogp = new Motogp()
const moto = new Moto()

console.log(motogp.drive())
console.log(moto.drive())


class Renaldi {
    drive() {
        return `Im Renaldi Mohamad`
    }
}

class Mohamad {
    drive() {
        return `Mohamad adalah marga saya`
    }
}

class Usia {
    drive() {
        return `Saya berumur 18 tahun gys`
    }
}

const usia = new Usia()
const renaldi = new Renaldi()
const mohamad = new Mohamad()


console.log(usia.drive())
console.log(mohamad.drive())
console.log(renaldi.drive())