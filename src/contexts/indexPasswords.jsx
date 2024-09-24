import { useState, createContext } from "react";

//Context para saber cuando se guardaron los passwords, y re-renderizar la lista
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