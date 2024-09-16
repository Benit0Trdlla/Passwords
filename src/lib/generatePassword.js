import { mezclarPalabra } from "./mezclarPalabra";
export const generatePassword = (wordToMix, length, stateSwitch) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = '';

    if (!wordToMix && !stateSwitch) return new Error('Debes insertar una palabra');
    if (wordToMix.length >= 16) return mezclarPalabra(wordToMix);
    else {
        // > de 16 caracteres, añade caracteres aleatorios
        let longitudMinima = Math.max(8, wordToMix.length); // Mínimo de 8 caracteres
        let longitudAleatoria = Math.max(length, longitudMinima) - wordToMix.length;
        let cadenaAleatoria = '';

        // Genera una cadena aleatoria para completar la longitud total
        for (let i = 0; i < longitudAleatoria; i++) {
            cadenaAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        // Posición aleatoria donde se insertará la palabra
        const posicionAleatoria = Math.floor(Math.random() * (cadenaAleatoria.length + 1));
        // Inserta la palabra en la cadena
        resultado = cadenaAleatoria.slice(0, posicionAleatoria) + wordToMix + cadenaAleatoria.slice(posicionAleatoria);

        return resultado = mezclarPalabra(resultado);
    }
}