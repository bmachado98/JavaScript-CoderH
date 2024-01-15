function calcularDigitoVerificador(cedula) {
    // Validar que la cédula tenga 7 dígitos
    if (!/^\d{7}$/.test(cedula)) {
        throw new Error("La cédula debe tener 7 dígitos numéricos");
    }

    // Convertir la cédula a un array de dígitos
    const digitos = cedula.split('').map(Number);

    // Aplicar el algoritmo módulo 10
    const coeficientes = [2, 9, 8, 7, 6, 3, 4];
    let suma = 0;

    for (let i = 0; i < digitos.length; i++) {
        suma += digitos[i] * coeficientes[i];
    }

    const resto = suma % 10;
    const digitoVerificador = resto === 0 ? 0 : 10 - resto;

    return digitoVerificador;
}

// Ejemplo de uso
const cedulaUruguaya = prompt("Ingrese cédula a calcular dígito verificador: ...");
const digitoVerificador = calcularDigitoVerificador(cedulaUruguaya);
alert(`El dígito verificador de la cédula ${cedulaUruguaya} es: ${digitoVerificador}`);