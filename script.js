const linkNavigators = document.querySelectorAll(".nav-list li");
for (const li of linkNavigators) {
    li.addEventListener("click", function() {
        alert("Página de testes! Aba indisponível");
    });
}

const nome = document.querySelector(".texts .textoSecundario");
var listaFrases = ["Mais perto de você", "Na tela do seu computador", "Na palma da sua mão"];

nome.innerHTML = listaFrases[0]

let contador = 0;

setInterval(function () {
    const index = listaFrases.indexOf(nome)
    contador += 1;
    if (contador == listaFrases.length) {
        contador = 0;
    }

    nome.innerHTML = listaFrases[contador]}, 2500);


