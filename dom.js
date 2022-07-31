
function changeH1() {
    let h1 = document.getElementsByTagName("h1")[0]//vai me retornar uma array
    h1.innerHTML = caixa.value
}

function onhide() {
    let h1 = document.getElementsByTagName("h1")[0]//vai me retornar uma array
    h1.style = "display: none"
}