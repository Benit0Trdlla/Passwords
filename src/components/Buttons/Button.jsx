import "./Button.css"
import { mezclarPalabra } from "../../lib";
export const Button = () => {
  function generarCadenaConPalabra(palabra, longitudTotal) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = '';

    // Caso 1: Si la palabra tiene 16 o más caracteres, solo mezcla los caracteres de la palabra
    if (palabra.length >= 16) return console.log(mezclarPalabra(palabra) + " " + "es mayor");
    else {
      console.log(palabra + " " + "Menor");
      // Caso 2: Si la palabra tiene menos de 16 caracteres, añade caracteres aleatorios
      let longitudMinima = Math.max(8, palabra.length); // Asegurar un mínimo de 8 caracteres
      let longitudAleatoria = Math.max(longitudTotal, longitudMinima) - palabra.length;
      let cadenaAleatoria = '';

      // Generar una cadena aleatoria para completar la longitud total
      for (let i = 0; i < longitudAleatoria; i++) {
        cadenaAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }

      // Generar una posición aleatoria donde se insertará la palabra
      const posicionAleatoria = Math.floor(Math.random() * (cadenaAleatoria.length + 1));

      // Insertar la palabra en la cadena aleatoria
      resultado = cadenaAleatoria.slice(0, posicionAleatoria) + palabra + cadenaAleatoria.slice(posicionAleatoria);

      // Mezclar la cadena resultante
      resultado = mezclarPalabra(resultado);
    }
    console.log(resultado);
  };
  const palabra = 'Yougnboy11111111';
  console.log(palabra.length + "YO");

  return (
    <button className="button" onClick={() => generarCadenaConPalabra(palabra, 16)}>Generar</button>
  );
};


