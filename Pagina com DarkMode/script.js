const btn = document.getElementById('darkModeBtn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  //trocar o texto do botão
  if(document.body.classList.contains('dark-mode')){
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
});

const texto = document.getElementById('meuTexto');

const textoOriginal = texto.textContent;
const textoNovo = texto.textContent;

texto.addEventListener('mouseenter', () => {
  texto.textContent = textoNovo;
});

texto.addEventListener('mouseleave', () => {
  texto.textContent = textoOriginal;
});
