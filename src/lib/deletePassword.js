export const deletePassword = (index) => {
    // Obtener el JSON del localStorage
    var json = JSON.parse(localStorage.getItem('Passwords'));
    // Eliminar el elemento por índice
    json.splice(index, 1);
    // Guardar el JSON actualizado en el localStorage
    localStorage.setItem('Passwords', JSON.stringify(json));
}