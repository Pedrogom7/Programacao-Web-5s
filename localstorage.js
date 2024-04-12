let numeroContador = 0
// ----------------------- DATA -----------------------------

let date = new Date()
let formato = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
}
let lastVisit = new Intl.DateTimeFormat("pt-BR", formato).format(date)
localStorage.setItem("lastVisit", JSON.stringify(lastVisit))



// ------------------ CONTADOR DE VISITAS --------------------
if (localStorage.getItem('Visits')) {
    let contador = JSON.parse(localStorage.getItem('Visits'))
    contador++
    localStorage.setItem("Visits", JSON.stringify(contador))
    numeroContador = contador
} else {
    let contador = 1
    localStorage.setItem("Visits", JSON.stringify(contador))
    numeroContador = contador
}


// ------------- ATUALIZANDO A PAGINA -----------------------
let texto = document.getElementById("updates")

texto.textContent = `Esta página foi visitada ${numeroContador} vezes. A última visita foi: ${lastVisit}`