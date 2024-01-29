// Definición de la clase Vehiculo
class Vehiculo {
    constructor(nombre, velocidad) {
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
}

// Función para iniciar la carrera
function iniciarCarrera(eleccion) {
    const vehiculos = [
        new Vehiculo("Coche 1", 150),
        new Vehiculo("Coche 2", 140),
        new Vehiculo("Moto 1", 130),
        new Vehiculo("Moto 2", 100),
        new Vehiculo("Camión", 120)
    ];

    const vehiculoElegido = vehiculos[eleccion - 1];
    console.log("Has elegido el vehículo:", vehiculoElegido.nombre);

    let vehiculoGanador = vehiculoElegido;
    for (const vehiculo of vehiculos) {
        if (vehiculo.velocidad > vehiculoGanador.velocidad) {
            vehiculoGanador = vehiculo;
        }
    }

    console.log("El ganador es:", vehiculoGanador.nombre);
    mostrarResultado(vehiculoGanador.nombre);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = `El ganador es: ${resultado}`;
}

