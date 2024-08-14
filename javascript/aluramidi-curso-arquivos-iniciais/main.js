
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;
// OUTRA MANEIRA document.querySelector('.tecla_pom').addEventListener('click', tocaSomPom);

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom

