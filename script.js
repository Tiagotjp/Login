// Botões de navegação entre telas
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Lógica de cadastro e login
let registeredUser = null;  // Variável para armazenar o usuário cadastrado

// Cadastro de usuário
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o comportamento padrão de recarregar a página

    // Obter dados do formulário de cadastro
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Armazenar os dados do usuário
    registeredUser = {
        name: name,
        email: email,
        password: password
    };

    alert('Cadastro realizado com sucesso! Pode fazer login.');
    container.classList.remove('right-panel-active');  // Voltar para tela de login
});

// Login de usuário
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o comportamento padrão de recarregar a página

    // Obter dados do formulário de login
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Verificar se os dados correspondem ao usuário cadastrado
    if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
        // Redirecionar para uma nova página com a mensagem de sucesso
        window.location.href = `home.html?user=${registeredUser.name}`;
    } else {
        alert('Email ou palavra-passe incorretos!');
    }
});
