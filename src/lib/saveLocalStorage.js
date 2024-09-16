export const saveLocalStorage = (key, value) => {
    try {
        if (key.trim() === " ") return new Error('La clave no puede estar vacía');
        if (value.trim() === " ") return new Error('El valor no puede estar vacío');
        localStorage.setItem(key, value);
    } catch (error) {
        return new Error(`Error al guardar en almacenamiento local: ${error.message}`);
    }
}