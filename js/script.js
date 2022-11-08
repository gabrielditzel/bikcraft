// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);

// Ativar items do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');
  pergunta.setAttribute('aria-expanded', resposta.classList.contains('ativa'));
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
  const img = event.currentTarget;
  if (matchMedia('(min-width: 1000px)').matches) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
