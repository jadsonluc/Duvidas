

window.onload = function() {
let h1 = document.getElementsByTagName("h1")

console.log(h1)

for(var h of h1) {
    console.log(h)
    h.addEventListener("click", qop)
}
function qop(e) {
    console.log(e.target.parentElement)
}
}

