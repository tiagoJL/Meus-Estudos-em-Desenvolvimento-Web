let ListItens = [...document.querySelectorAll('.li-nav')]
let itemPerPage = 5
let pageLength = Math.ceil(ListItens.length / itemPerPage)
let state = {currentPage: 1}

let controls = {
    start(){
        state.currentPage = 1
        updatePage()
    },
    prev(){
        if (state.currentPage > 1){
            state.currentPage--
            updatePage()
        }
    },
    next(){
        if (state.currentPage < pageLength){
        state.currentPage++
        updatePage()
    }
    },
    final(){
        state.currentPage = pageLength
        updatePage()
    },
    goTo(page) {
        if(page >= 1 && page <= pageLength){
            state.currentPage = page
            updatePage()
        }
    }
}

function updatePage() {
    let initialIndex = (state.currentPage - 1) * itemPerPage
    let endIndex = itemPerPage + initialIndex

    ListItens.forEach(item => {item.style.display = "none"})

    goToButtons.forEach(button => {
        if (button.classList.contains("goToButton--active")){
            button.classList.remove("goToButton--active")
        }
    })

    goToButtons[state.currentPage - 1].classList.add("goToButton--active")

    
    for (let i = initialIndex; i < endIndex && i < ListItens.length; i++){
        ListItens[i].style.display = "block";
    }
}

let createGoToButtons = function(){

    for (let i = 0; i < pageLength; i++){
        let page = i + 1
        buttonNext.insertAdjacentHTML("beforebegin", `<button class="button goToButton" value=${page}>${page}</button>`)
    }

    let goToButtons = [...document.querySelectorAll(".goToButton")]

    goToButtons.forEach(button => {
        button.addEventListener("click", () => {controls.goTo(+button.value)})
    })

    return goToButtons

}


const buttonStart = document.querySelector("button.start")
const buttonPrev = document.querySelector("button.prev")
const buttonNext = document.querySelector("button.next")
const buttonFinal = document.querySelector("button.final")

buttonStart.addEventListener("click", controls.start)
buttonPrev.addEventListener("click", controls.prev)
buttonNext.addEventListener("click", controls.next)
buttonFinal.addEventListener("click", controls.final)


let goToButtons = createGoToButtons()

updatePage()
