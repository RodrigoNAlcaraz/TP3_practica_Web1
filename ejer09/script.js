let personas = [];

function agregarPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value;

  const persona = {
    nombre: nombre,
    edad: edad,
    email: email
  };

  personas.push(persona);
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("email").value = "";

  mostrarPersonas();
}

function mostrarPersonas() {
  const tablaBody = document.getElementById("tabla-body");
  tablaBody.innerHTML = "";

  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];

    const fila = document.createElement("tr");
    const columnaNombre = document.createElement("td");
    const columnaEdad = document.createElement("td");
    const columnaEmail = document.createElement("td");

    columnaNombre.textContent = persona.nombre;
    columnaEdad.textContent = persona.edad;
    columnaEmail.textContent = persona.email;

    fila.appendChild(columnaNombre);
    fila.appendChild(columnaEdad);
    fila.appendChild(columnaEmail);

    tablaBody.appendChild(fila);
  }
}
