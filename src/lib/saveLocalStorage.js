export const saveLocalStorage = (key, value) => {
        if (key.trim() === "") return new Error('Ingresa el nombre del sitio web, por favor 😉');
        if (value.trim() === "") return new Error('La contraseña no puede estar vacía');

        const generatedPasswords = JSON.parse(localStorage.getItem('Passwords')) || [];
        generatedPasswords.push({
                key,
                value
        });
        localStorage.setItem('Passwords', JSON.stringify(generatedPasswords));
}