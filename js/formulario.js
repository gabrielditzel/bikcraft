const formulario = document.querySelector('.form');

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      '<p class="form-enviado font-2-l"><span style="color: #317a00">Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>;';
  } else {
    formulario.innerHTML =
      '<p class="form-enviado font-2-l"><span style="color: #e00000">Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>';
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('.form .botao');
  botao.disabled = true;
  botao.innerHTML = 'Enviando...';
  const data = new FormData(formulario);

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);
