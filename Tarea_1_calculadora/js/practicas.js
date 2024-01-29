// elegir texto y variables de la calculadora 
let a = parseFloat(prompt('ingrese el primer numero'));
let b= parseFloat(prompt('Ingrese el segundo numero'));
let elegir = prompt( "Elija la operacion que desea hacer: \n1.- Suma \n2.- Resta \n3.-Multiplicacion \n4.-Division");
// 
if (isNaN(a)|| isNaN(b))
{
    alert('Ingresar numeros validos');
}else {let res;
    switch(elegir)
    {
    case "1":
        res = a + b
     break;
     case "2":
        res = a - b
        break;
        case "3":
        res = a * b
        break;
        case "4":
            if(b!==0)
            {
                res = a / b
            } else
            {
                alert("No se puede dividir entre 0")
            } break;
       
        }
        if(res !== undefined)
        {
            alert(`El resultado es ${res}`);
        }
    }

