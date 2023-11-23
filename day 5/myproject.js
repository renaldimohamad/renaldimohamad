
function getFullTime(tanggal) {
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


    const date = tanggal.getDate()
    const month = tanggal.getMonth()
    const year = tanggal.getFullYear()
    let hours = tanggal.getHours()
    let minutes = tanggal.getMinutes()

    if (hours <= 9) {
        hours = "0" + hours
    }

    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    return ` ${date} ${monthList[month]} ${year} ${hours}:${minutes} `
}

function getDistanceTime(time) {
    const timeNow = new Date().getTime()
    const timePosted = time

    const distance = timeNow - timePosted

    const distanceSeconds = Math.floor(distance / 1000)
    const distanceMinutes = Math.floor(distance / 1000 / 60)
    const distanceHours = Math.floor(distance / 1000 / 60 / 60)
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24)

    console.log("distnaceSeconds", distanceSeconds)
    console.log("distanceMinutes", distanceMinutes)
    console.log("distanceHours", distanceHours)
    console.log("distanceDay", distanceDay)

    if (distanceDay > 0) {
        return `${distance} day ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hours ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSeconds} seconds ago`
    }
}

console.log("distance time", getDistanceTime())


let datamyProject = []

function submitBlog() {
    console.log("data terkirim silahkan cek di dasboard anda")

    let inputName = document.getElementById("inputName").value
    let inputDescription = document.getElementById("inputDescription").value
    let inputImage = document.getElementById("inputImage").files


    console.log("name :", inputName)
    console.log("Description :", inputDescription)

    inputImage = URL.createObjectURL(inputImage[0])
    console.log(inputImage)

    const detailMyProject = {
        name: inputName,
        description: inputDescription,
        image: inputImage,
        posAt: new Date(),
        author: "Renaldi Mohamad",
        nodeJs: true,
        reactJs: true,
        nextJs: false,
        typescript: false,
    }

    datamyProject.push(detailMyProject)
    console.log("datamyProject", datamyProject)
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ""

    for (let index = 0; index < datamyProject.length; index++) {
        document.getElementById("contents").innerHTML += `  <div id="contents" class="blog-list-item">
    <div class="input-submit"
    style="display: flex; justify-content: center; align-items: center; margin-bottom: 50px;">

    <h1 style="font-size: 25px;">MY PROJECT</h1>
</div>

<div style="display: flex; justify-content: center; align-items: center;">

    <div style="width: 300px; border: solid 1px; ">

        <div></div>
        <a href="./detailmyproject.html">
            <img src="${datamyProject[index].image}" style="height: 100px; width: 100%;" alt="">
            <h1 style="font-size: 15px; color: black;">Dumbways Mobile App - 2021</h1>
            <p style="font-size: 10px; margin-bottom: 10px; color: black;">${getFullTime(datamyProject[index].posAt)}</p>

            <p style="font-size: 10px; margin-bottom: 10px; color: black;">             
                <p style="font-size: 10px; margin-bottom: 10px; color: black;">${datamyProject[index].description} </p>
            </p>
            

        <div
                
            style="display: flex; flex-direction: row; gap: 20px; margin-bottom: 20px; justify-content: end; width: 100px;">
                <img src="./icons/play-store.png" alt="" style="width: 15px;">
                <img src="./icons/atom.png" alt="" style="width: 15px;">
                <img src="./icons/java.png" alt="" style="width: 15px;">
            </div>
            <div style="display: flex; justify-content: center; margin-bottom:  10px;">
                <button
                    style="background-color: black; color: white; width: 120px; height: 20px; margin-right: 20px; border-radius: 10px;">edit</button>
                <button
                    style="background-color: black; color: white; width: 120px; height: 20px; border-radius: 10px;">delete</button>
            </div>

        </a>
        <p>
        ${getDistanceTime(datamyProject[index].posAt)}
        </p>
    </div> `

    }
}

setInterval(() => {
    renderBlog()
}, 1000)

// const d = new Date();
// document.getElementById("demo").innerHTML = d;
// console.log(d)

// ${datamyProject[index].nodeJs ? "nodeJs" : ""}
// ${datamyProject[index].reactJs ? "nodeJs" : ""}
// ${datamyProject[index].nextJs ? "nodeJs" : ""}
// ${datamyProject[index].typescript ? "nodeJs" : ""}

// console.log("day", tanggal.getDay())
// console.log("hours", tanggal.getHours())
// console.log("minutes", tanggal.getMinutes())
// console.log("fullYear", tanggal.getFullYear())
// console.log("getTime", tanggal.getTime())
// console.log("month", tanggal.getMonth())
// console.log("seconds", tanggal.getSeconds())


// function showMeHelloworld() {
//     const container = document.getElementById("contents")

//     container.innerHTML = '<p>HELLO WORLD </p>'
// }

// LOOPING : FOR, WHILE, DO-WHILE

//FOR -> perulangan yang kamu sudah tau kapan harus berhenti

// for (let index = 0; index < 4; index++) {
//     console.log("ini adalah index", index)
// }

// WHILE -> perulangan yang belum tentu kamu tau kapan harus berheti (berdasarkan data dinamis)

// DO-WHILE -> perulangan yang jalan dulu sekali,  baru di cek