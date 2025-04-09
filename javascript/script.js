//Variáveis de texto ou conteúdo
let textoN = document.querySelector('.conteudo__normal');
let textoA = document.querySelector('.msg__sucess');
let msgEmailCadastrado = document.querySelector('.active__paragrafo');
let txtValid = document.querySelector('.texto__active');
let span = document.querySelector('.span');
//Variáveis de Botão
let cadBotao = document.querySelector('#cad__botao');
let btnVoltar = document.querySelector('.btn__dismiss');
//Variáveis de Input
let cadEmail = document.getElementById('cad__email');
//Variável de form
let form = document.querySelector('.cadastro__input');

//Função para Validar Email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = cadEmail.value;
    const isValue = checkEmail(email);

    if (isValue) {
        //Mudando o layout quando E-mail for válido.
        cadBotao.addEventListener('click', function () {
            textoN.style.display = 'none';
            textoA.style.display = 'block';
            msgEmailCadastrado.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;
            txtValid.style.display = 'none';
            cadEmail.classList.remove('error');
        })
    } else {
        //Mensagem de erro caso o E-mail for inválido.
        textoN.style.display = 'block';
        textoN.style.display = 'flex';
        textoA.style.display = 'none';
        txtValid.style.display = 'block';
        cadEmail.classList.add('error');
    }
})

//Interação do Botão para retornar para layout inicial.
btnVoltar.addEventListener('click', function () {
    textoA.style.display = 'none';
    textoN.style.display = 'block';
    textoN.style.display = 'flex';
})