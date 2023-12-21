// class Testimonial {
//     constructor(author, contens, image) {
//         this.author = author
//         this.contens = contens
//         this.image = image
//     }

//     html() {
//         return `
//         <div class="testimonial">
//         <img class="img-testimonial" src="${this.image}" alt="">
//         <p class="contents-testimonial">"${this.contens}"</p>
//         <p class="author-testimonial">~${this.author}</p>
//     </div>

//     </nav>
//     `


//     }
// }


// const testimonial1 = new Testimonial("Antonio Elz", "the service is really great", "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600")
// const testimonial2 = new Testimonial("Martinez Emiliano", "wow, this is really cool", "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=600")
// const testimonial3 = new Testimonial("Surya Elidanto", "this is cool, you are really great friend", "https://images.pexels.com/photos/567459/pexels-photo-567459.jpeg?auto=compress&cs=tinysrgb&w=600")

// const testimonial = [testimonial1, testimonial2, testimonial3]

// let testimonialHTML = ''
// for (let index = 0; index < testimonial.length; index++) {
//     testimonialHTML += testimonial[index].html()
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML




class Testimonial {
    constructor(author, contens, image) {
        this.author = author
        this.contens = contens
        this.image = image
    }

    html() {
        return `
        <div class="testimonial">
        <img class="img-testimonial" src="${this.image}" alt="">
        <p class="contents-testimonial">"${this.contens}"</p>
        <p class="author-testimonial">~${this.author}</p>
    </div>`
    }

}

const testimonial1 = new Testimonial("Alonso", "wow this is amazing!", "https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=600")
const testimonial2 = new Testimonial("Alexis", "Thank you for your service and cooperation, my brother", "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&w=600")
const testimonial3 = new Testimonial("Daniel", "very cool, many people like your work", "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=600")

const testimonial = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ""
for (let index = 0; index < testimonial.length; index++) {
    testimonialHTML += testimonial[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML










