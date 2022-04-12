const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const btnLogin = document.getElementById('btnLogin');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');

function validaDados() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validaDados);

const check = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function habilitaBtn() {
  if (btnSubmit.hasAttribute('disabled')) {
    btnSubmit.attributes.removeNamedItem('disabled');
    btnSubmit.classList.add('botao-habilitado');
    btnSubmit.classList.remove('botao-desabilitado');
  } else {
    btnSubmit.setAttribute('disabled', '');
    btnSubmit.classList.add('botao-desabilitado');
    btnSubmit.classList.remove('botao-habilitado');
  }
}

check.addEventListener('click', habilitaBtn);

function contaCaracteres() {
  if (textarea.value.length + 1 > 500) {
    counter.textContent = 0;
  } else {
    counter.textContent = 500;
    const texto = textarea.value.length + 1;
    const contador = parseInt(counter.textContent, 10) - texto;
    counter.textContent = contador;
  }
}

textarea.addEventListener('input', contaCaracteres);

function incrementaCasoTire(event) {
  const chave = event.key;
  if (counter.innerText === '500') {
    counter.innerText = 500;
  } else if (chave === 'Backspace' || chave === 'Delete') {
    const contador = parseInt(counter.innerText, 10) + 1;
    counter.innerText = contador;
  }
}

textarea.addEventListener('keydown', incrementaCasoTire);

console.log(textarea.innerHTML.length);
