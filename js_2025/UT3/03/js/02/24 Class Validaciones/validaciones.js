class Validaciones {
    // Valida que un campo no esté vacío
    static noVacio(campo, nombreCampo) {
        if (!campo || campo.trim() === "") {
            throw new Error(`El campo "${nombreCampo}" no puede estar vacío.`);
        }
    }

    // Valida que un texto sea un correo electrónico válido
    static esEmail(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correo)) {
            throw new Error(`El correo "${correo}" no es válido.`);
        }
    }

    // Valida que un número esté dentro de un rango
    static esNumeroEnRango(numero, min, max, nombreCampo) {
        if (isNaN(numero)) {
            throw new Error(`El campo "${nombreCampo}" debe ser un número.`);
        }
        if (numero < min || numero > max) {
            throw new Error(`El campo "${nombreCampo}" debe estar entre ${min} y ${max}.`);
        }
    }
}
