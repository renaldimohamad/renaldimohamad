function submitData() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value
    const inputPhoneNumber = document.getElementById("inputPhoneNumber").value
    const inputSubject = document.getElementById("inputSubject").value
    const inputMessage = document.getElementById("inputMessage").value

    if (inputName == '') {
        alert('the form must be filled in')
    } else if (inputEmail == '') {
        alert('the form must be filled in')
    } else if (inputPhoneNumber == '') {
        alert('the form must be filled in')
    } else if (inputSubject == '') {
        alert('the form must be filled in')
    } else if (inputMessage == '') {
        alert('the form must be filled in')
    } else {

        console.log('nama :', inputName)
        console.log('email :', inputEmail)
        console.log('phone :', inputPhoneNumber)
        console.log('subject :', inputSubject)
        console.log('message :', inputMessage)

        const emailReceiver = "dumbways@gmail.com"
        const subject = "lets talk"
        const body = "im Renaldi Mohamad nice to meet you brother"

        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=${body}`
        a.click(submitData)
    }
}












// PEMBAHASAN JAVASCRIPT

// const nilai = 75
// if (nilai < 85) {
//     console.log('nilai B')
// } else if (nilai < 20) {
//     console.log('Nilai Z')
// } else if (nilai < 50) {
//     console.log('nilai A')
// } else {
//     console.log('nilai tidak ada')
// }

// function
// function hello() {
//     const nama = "Renaldi Mohamad"
//     const umur = 24
//     console.log(`nama saya ${nama} usia saya adalah ${umur}`)
// }

// hello()


// function kerangka() {

// }
// function mesin() {

// }
// function roda() {
//     kerangka()
//     mesin()
// }

// kerangka(console.log(kerangka))

// ARROW FUNCITON

// let arrowFunction = () => {
//     console.log('Renaldi Mohamad')
// }

// arrowFunction();


// const data = {
//     nama: inputName,
//     email: inputEmail,
//     phone: inputPhoneNumber,
//     subject: inputSubject,
//     message: inputMessage,
// }

// console.log(data.nama)
// console.log(data.email)
// console.log(data.phone)
// console.log(data.subject)
// console.log(data.message)



// console.log('nama :', inputName)
// console.log('email :', inputEmail)
// console.log('phone :', inputPhoneNumber)
// console.log('subject :', inputSubject)
// console.log('message :', inputMessage)

// }

// if (inputName == '') {
//     alert('harus di isi')
// } else if (inputEmail == '') {
//     alert('Email harus di isi')
// }

// console.log('nama :', inputName)
// console.log('email :', inputEmail)
// console.log('phone :', inputPhoneNumber)
// console.log('subject :', inputSubject)
// console.log('message :', inputMessage)



// if (inputName == '') {
//     alert('harus di isi')
// } else {
//     console.log(inputName)
// }



// function  showMeHelloWorld() {
//     const container = document.getElementById("contents")
//     container.innerHTML = `<p>Hello World </p>`
// }




