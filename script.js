const form = document.getElementById("myForm");

//agregar un listener event para encontrar nuestra funcion
form.addEventListener("submit",function(event){
    event.preventDefault();
    validateForm();
});

//validacion de caracteres permitidos en el email
function validateEmail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput= document.getElementById("email");
    const email= emailInput.value;
    //alerta de email correcto
    if(!validateEmail(email)){
        alert("Por favor ingrese un correo electrónico válido.")
    }   else{
        alert("Correo electrónico enviado correctamente.")
    }
}

.container-nav {
    display: flex;
    padding: 10px;
    height: 50px;
    background-color: black;
    }
