function analizarCadena() {
    const cadena = document.getElementById("texto").value;
    const palabras = cadena.split(" ");
    
    // Número de palabras
    const numPalabras = palabras.length;
    document.getElementById("infoPalabras").textContent = "Número de palabras: " + numPalabras;
  
    // Primera palabra
    const primeraPalabra = palabras[0];
    document.getElementById("primeraPalabra").textContent = "Primera palabra: " + primeraPalabra;
  
    // Última palabra
    const ultimaPalabra = palabras[palabras.length - 1];
    document.getElementById("ultimaPalabra").textContent = "Última palabra: " + ultimaPalabra;
  
    // Palabras en orden inverso
    const palabrasInverso = palabras.reverse().join(" ");
    document.getElementById("palabrasInverso").textContent = "Palabras en orden inverso: " + palabrasInverso;
  
    // Palabras ordenadas de la "a" a la "z"
    const palabrasOrdenAZ = palabras.sort().join(" ");
    document.getElementById("palabrasOrdenAZ").textContent = "Palabras ordenadas de la 'a' a la 'z': " + palabrasOrdenAZ;
  
    // Palabras ordenadas de la "z" a la "a"
    const palabrasOrdenZA = palabras.reverse().join(" ");
    document.getElementById("palabrasOrdenZA").textContent = "Palabras ordenadas de la 'z' a la 'a': " + palabrasOrdenZA;
  }
  