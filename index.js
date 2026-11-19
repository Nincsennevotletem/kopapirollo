
const ujjetekGomb = document.querySelector("#Ujjatek")
console.log(ujjetekGomb)
const jatekterElem = document.getElementsByClassName("jatekter")
console.log(jatekterElem)
ujjetekGomb.addEventListener("click", megjelenit)

function megjelenit(){
    const htmlKod = `

        <div id = "gep">
            <h2>A gép tippje</h2>
            <div class="kep">
                <img src="kepecskek/depositphotos_122688212-stock-photo-question-mark-and-man-concept.jpg" alt="kepecskek/depositphotos_122688212-stock-photo-question-mark-and-man-concept.jpg">
            </div>
        </div>
        <div id="jatekos">
            <h2>A játékos tippje</h2>
            <div class="gombok">
                <button id="ko">K</button>
                <button id="papir">P</button>
                <button id="ollo">O</button>
            </div>
            <div class="kep">
                <img src="kepecskek/depositphotos_122688212-stock-photo-question-mark-and-man-concept.jpg" alt="kepecskek/depositphotos_122688212-stock-photo-question-mark-and-man-concept.jpg">
            </div>
        </div>
    `
    jatekterElem[0].innerHTML= ""
    jatekterElem[0].insertAdjacentHTML("beforeEnd",htmlKod)
    const jatekGombok = document.querySelectorAll(".gombok button")
    jatekGombok[0].addEventListener("click", kivalaszt)
    jatekGombok[1].addEventListener("click", kivalaszt)
    jatekGombok[2].addEventListener("click", kivalaszt)
}

function kivalaszt(){
    const kep = document.querySelector("#jatekos img")
    console.log(kep)
    console.log(event.target.id)
    kep.src = "kepek / ko.jpg"
    kep.src = "kepek / papir.jpg"
    kep.src = "kepek / ollo.jpg"
    kep.src = `kepecskek/${event.target.id}.jpg`
}

function gepVaslasztas(jatekos){
    const kep = document.querySelector("#gep img");
    let veletlen=Math.floor(Math.random()*3)
    console.log("gep tipje", veletlen)

    if (veletlen === 0){
        kep.src = `kepecskek/ko.jpg`
    } else if (veletlen === 1){
        kep.src = `kepecskek/papir.jpg`
    } else{
        kep.src = `kepecskek/ollo.jpg`
    }
    ellenorzes()
}

function ellenorzes(veletlen, jatekos){
    
    let eredmeny = ""

    if (){
        eredmeny = "Játékos nyert!"
    }
    const kiirElem = document.getElementById("gyoztes")
    kiirElem.innerHTML=`<p>${eredmeny}<p>`;
}