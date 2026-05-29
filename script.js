function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  let error = document.getElementById("errorNombre");
  if (nombre.length < 3 || /[^a-zA-Z\s]/.test(nombre)) {
    error.innerHTML = "Debe tener mínimo 3 letras y solo caracteres válidos.";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
}

function validarDni() {
  let dni = document.getElementById("dni").value;
  let error = document.getElementById("errorDni");
  if (dni.length !== 8 || isNaN(dni)) {
    error.innerHTML = "El DNI debe tener exactamente 8 numeros.";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }


}

function validarFecha() {
  let fecha = document.getElementById("fecha").value;
  let error = document.getElementById("errorFecha");
  if (!fecha) {
    error.innerHTML = "Debe ingresar una fecha.";
    return false;
  }
  let nacimiento = new Date(fecha);
  let hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  if (edad < 18 || (edad === 18 && hoy < new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate()))) {
    error.innerHTML = "Debe ser mayor de 18 años.";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
}

function validarFormulario() {
  let nombreValido = validarNombre();
  let dniValido = validarDni();
  let fechaValida = validarFecha();

  let resultado = document.getElementById("resultado");
  if (nombreValido && dniValido && fechaValida) {
    resultado.innerHTML = "<span class='exito'>Formulario enviado correctamente </span>";
  } else {
    resultado.innerHTML = "<span class='error'>Hay errores en el formulario </span>";
  }
}

function hacerPreguntas() {
  let respuestasDiv = document.getElementById("respuestas");
  let nacionalidad = prompt("¿Cual es tu nacionalidad?");
  let nivel = prompt("¿Cual es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
  let motivo = prompt("¿Porque elegiste esta carrera?");

  respuestasDiv.innerHTML = `
    <p>Pregunta 1: ${nacionalidad ? nacionalidad : "No respondio"}</p>
    <p>Pregunta 2: ${nivel ? nivel : "No respondio"}</p>
    <p>Pregunta 3: ${motivo ? motivo : "No respondio"}</p>
  `;
}
