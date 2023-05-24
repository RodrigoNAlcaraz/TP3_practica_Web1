var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];
for (var i = 0; i < lista.length; i++) {
  if (isNaN(Number(lista[i]))) {
    console.log(lista[i]);
  }
}
