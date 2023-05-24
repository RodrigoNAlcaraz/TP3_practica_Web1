function dibujarRectangulo() {
	let base = parseInt(document.getElementById("base").value);
	let altura = parseInt(document.getElementById("altura").value);

	// Validar que los valores ingresados sean números positivos
	if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
		alert("Por favor, ingrese valores numéricos positivos.");
		return;
	}

	// Crear el rectángulo
	let rectangulo = "";
	for (let i = 0; i < altura; i++) {
		for (let j = 0; j < base; j++) {
			let caracter = (i === 0 || i === altura - 1 || j === 0 || j === base - 1) ? "*" : " ";
			rectangulo += caracter + "  ";
		}
		rectangulo += "\n";
	}

	// Mostrar el resultado
	document.getElementById("resultado").innerText = rectangulo;
}


