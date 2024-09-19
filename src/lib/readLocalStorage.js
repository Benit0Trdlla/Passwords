export const readLocalStorage = () => {
    const generatedPasswords = JSON.parse(localStorage.getItem('Passwords')) || [];
    // if (generatedPasswords.length === 0) {
    //     return new Error('No hay contraseñas guardadas, por favor ingresa una 🙂');
    // }
    return generatedPasswords;
}