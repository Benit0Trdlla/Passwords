import { mezclarPalabra } from "./mezclarPalabra";
export const generatePassword = (wordToMix, length, stateSwitch) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = '';

    if (!wordToMix && !stateSwitch) return alert("No hay palabra para mezclar. Ingresa una palabra por favor ☺");
    // Si la palabra tiene 16 o más caracteres, solo mezcla los caracteres de la palabra
    if (wordToMix.length >= 16) return mezclarPalabra(wordToMix);
    else {
        // Si la palabra tiene menos de 16 caracteres, añade caracteres aleatorios
        let longitudMinima = Math.max(8, wordToMix.length); // Asegurar un mínimo de 8 caracteres
        let longitudAleatoria = Math.max(length, longitudMinima) - wordToMix.length;
        let cadenaAleatoria = '';

        // Generar una cadena aleatoria para completar la longitud total
        for (let i = 0; i < longitudAleatoria; i++) {
            cadenaAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        // Generar una posición aleatoria donde se insertará la palabra
        const posicionAleatoria = Math.floor(Math.random() * (cadenaAleatoria.length + 1));

        // Insertar la palabra en la cadena aleatoria
        resultado = cadenaAleatoria.slice(0, posicionAleatoria) + wordToMix + cadenaAleatoria.slice(posicionAleatoria);

        // Mezclar la cadena resultante
        return resultado = mezclarPalabra(resultado);
    }
}