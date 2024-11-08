
const botonCalcular = document.getElementById('calcular');
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');


function calcularPrestamo() {
    const monto = parseFloat(entrada.value); 

    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Por favor, ingresa un monto válido.";
        return;
    }

    
    const interes = 0.05;
    const plazo = 12;
    const montoFinal = monto + (monto * interes); 
    resultado.textContent = `El monto total a pagar con intereses es: $${montoFinal.toFixed(2)}`;
}


botonCalcular.addEventListener('click', calcularPrestamo);

