/*Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
random de la clase Math.


function myFuncion(){ 
let min=1;
let max=6;
let num=0;
for (let i=0;i<50; i++){
    num= Math.floor(Math.random() * max) + min;
    console.log(num);
}
}
*/
function myFuncion() {
  let min = 1;
  let max = 6;
  let num = 0;
  let tableBody = document.querySelector('#randomNumbersTable tbody');

  for (let i = 0; i < 50; i++) {
    num = Math.floor(Math.random() * max) + min;

    let row = document.createElement('tr');
    let numberCell = document.createElement('td');
    numberCell.textContent = i + 1;
    let valueCell = document.createElement('td');
    valueCell.textContent = num;

    row.appendChild(numberCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  }
}

// Llamar a la función para generar la tabla
myFuncion();
