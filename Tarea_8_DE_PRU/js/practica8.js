function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operation = document.getElementById('operation').value;
  let result;

  console.log(`Número 1: ${num1}`);
  console.log(`Número 2: ${num2}`);
  console.log(`Operación: ${operation}`);

  switch (operation) {
    case "add":
      result = num1 + num2;
      console.log(`Resultado de Suma: ${result}`);
      break;
    case "subtract":
      result = num1 - num2;
      console.log(`Resultado de Resta: ${result}`);
      break;
    case "multiply":
      result = num1 * num2;
      console.log(`Resultado de Multiplicación: ${result}`);
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
        console.log(`Resultado de División: ${result}`);
      } else {
        console.log('No se puede dividir entre 0');
        alert("No se puede dividir entre 0");
        return;
      }
      break;
    default:
      console.log('Operación no válida');
      alert("Operación no válida");
      return;
  }

  document.getElementById('result').innerText = `El resultado es ${result}`;
}
