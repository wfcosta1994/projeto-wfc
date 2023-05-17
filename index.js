var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
}
function rolarparaesquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"   
}