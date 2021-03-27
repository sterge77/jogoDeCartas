//criando uma função para mostrar senha
function passwordVisibility(local) {

    //pegando elementos
    const passwordBox = document.getElementById('password')
    const passwordIcon = document.getElementById('passwordIcon')

    if (passwordBox.type == 'password') {

        passwordBox.setAttribute('type', 'text')
        passwordIcon.setAttribute('src', './svg/login/show.svg')

    } else {

        passwordBox.setAttribute('type', 'password')
        passwordIcon.setAttribute('src', './svg/login/hidden.svg')

    }

}