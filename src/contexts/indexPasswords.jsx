import { useState, createContext } from "react";

//Context para saber el indice de las contraseñas, y leerlo en el modal para eliminar la contraseña correspondiente
export const IndexPasswordsContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function IndexPasswordsContextProvider({ children }) {
    const [indexPasswords, setIndexPasswords] = useState(0);

    return (
        <IndexPasswordsContext.Provider value={{ indexPasswords, setIndexPasswords }}>
            {children}
        </IndexPasswordsContext.Provider>
    )
}