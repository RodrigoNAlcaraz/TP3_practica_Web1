function calcularDias() {
	let nombre = document.getElementById("nombre").value;
	let edad = document.getElementById("edad").value;

	if (edad === "") {
		alert("Por favor, ingrese su edad.");
		return;
	}

	let dias = edad * 365; // asumiendo que todos los años tienen 365 días
	alert("Hola " + nombre + "! Usted ha vivido aproximadamente " + dias + " días hasta el momento.");
}
