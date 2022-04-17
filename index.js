//console.log("crago js");


/*
botonVerServicios.className += 'btn-enviar';
console.log(botonVerServicios.className);
*/

/*
botonVerServicios.style.backgroundColor = '#000000';
botonVerServicios.innerHTML = 'Cambio!';
//botonVerServicios.innerText = 'Cambio!';  opcion 1 para cambio
*/
/*
const botonVerServicios = document.querySelector('formulario-contacto');

formulario.style.width = '200px';
*/

/*
const enlaces = document.getElementsByTagName('a');

//pasar una funcion como parametro, por cada elemento va a definir de una variable
Array.from(enlaces).forEach(element => {
    enlaces.style.backgroundColor = '#000000';
});
*/

/*
//cambio de fonde de color de textos del HTML
const enlaces = document.getElementsByTagName('a');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].style.backgroundColor = '#000000';

}
*/



/*
const enlaces = document.querySelectorAll('a');

Array.from(enlaces).forEach(Element => {
enlaces[i].style.backgroundColor = '#000000';
});
*/

/*
const formulario = document.querySelector('formulario-contacto');

const buttonLimpiar = document.createElement('button');
const textoButtonLimpiar = Botonlimpiar.createTextNode('limpiar Formulario');
Botonlimpiar.appendChild(textoButtonLimpiar)

const botonEnviar = document.querySelector('.btn-enviar');

botonEnviar.insertAdjacentElement(Botonlimpiar);

document.querySelector('.btn-limpiar').style.backgroundColor = '#ff0000';
*/


/*


formulario.createElement('button');
formulario.innerHTML += '<button class = "btns btn-enviar btn-limpiar" > limpiarformulario < /button>';

document.querySelector('.btn-limpiar').atyle.backgroundColor = '#ff0000';
formulario.removeChild(document.querySelector('.btn-limpiar'));
*/

/*
const formulario = document.querySelector('formulario-contacto');
const botonLimpiar = document.createElement('button');
const textoBotonLimpiar = document.createTextNode('Limpiar Formulario');
botonLimpiar.appendChild(textoBotonLimpiar);
const botonEnviar = document.querySelector('.btn-enviar');
botonEnviar.insertAdjacentElement('afterend', botonLimpiar);
botonLimpiar.className = 'btns btn-enviar btn-limpiar';
document.querySelector('.btn-limpiar').style.backgroundColor = "#ff0000";


botonLimpiar.addEventListener('click', (event) => {
    alert('estas seguro que decea borra el formulario?');
    event.preventDefault();
});

botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();

})
*/


// muy importante
//clase3 para validaciones en formulario

const formulario = document.querySelector('#formulario-contacto');
const botonEnviar = document.createSelector('.btn-enviar');

//cambiar en el html las consultas byelements
const name = document.getElementsByName('name_contact')[0];
const email = document.getElementsByName('email_contact');
const phone = document.getElementsByName('phone_contact');
const topic = document.getElementsById('topic_contact');
const commit = document.getElementsByName('commit_contact');

const errorsList = document.getElementById('error');

function showError(element) {
    element.classlList.toggle('Error')
    errorsList.innerHTML += `<li>${message}</li>`;
}
// campo nombre y apellido no debe estar vacio y contener al menos un espacio
botonEnviar.addEventListener('click', (event) => {
    event.preventDeafault();
    const sanitizedName = nameContact.value.trim();
    if (nameContact.value.trim().length === 0 || sanitizedName.indexOf(' ') < 0) {
        showError(nameContact, 'campo nombre y apellido no debe estar vacio y contener al menos un espacio');


    }
    //Campo correo debe tener un correo valido
    const mailRe = /\w+@\w+\.\w{2,7}/mg;
    if (!mailRe.exec(mail, value)); {
        showError(mail, 'Campo correo debe tener un correo valido');
    }

    //El campo nuero de telefono debe tener entre 7 a 15 digitos,pudiendo tener un a+ al inicio, ignorando espacios en blanco
    const phoneRe = /^\+?\d{7,15}$/;
    const sanitizedPhone = phone.value.replace(' ', ' ');
    if (!phoneRe.exec(mail, value)); {
        showError(phone, 'El campo nuero de telefono debe tener entre 7 a 15 digitos,pudiendo tener un a+ al inicio, ignorando espacios en blanco');

    }

    // Campo comentario debe tener al menos 20 caracteres
    const santizedCommit = commit.value.replace.trim();
    if (santizedCommit.length < 20) {
        showError(commit, 'Campo comentario debe tener al menos 20 caracteres');
    }

});