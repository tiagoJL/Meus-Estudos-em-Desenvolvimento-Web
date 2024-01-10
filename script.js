let simpleAnimate = function() {
    document.querySelectorAll("[data-animate]").forEach(
        elemento => {
            delay = elemento.getAttribute("data-animate");
                function adicionarClasse(){
                    elemento.classList.add("animate")
                }
                setTimeout(adicionarClasse, +delay)
    })
}

setTimeout(() => {
    simpleAnimate();
}, 1)


