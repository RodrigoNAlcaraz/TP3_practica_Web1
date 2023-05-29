const frases = [
    "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
  ];
  
  function obtenerFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }
  