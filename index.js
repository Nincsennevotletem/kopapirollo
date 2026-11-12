
const ujjetekGomb = document.querySelector("#Ujjatek")
const jatekterElem = document.getElementsByClassName("jatekter")
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
}

function kivalaszt(){
    console.log(event.target.id)
}