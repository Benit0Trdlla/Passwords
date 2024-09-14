export const mezclarPalabra = (palabra) => {
    // Convertir la palabra en un array, mezclar y devolver como cadena
    return palabra.split('').sort(() => Math.random() - 0.5).join('');
}