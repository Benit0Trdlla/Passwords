import { useState, createContext } from "react";

//Context para saber cuando se guardaron los passwords, y re-renderizar la lista
export const SavedContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function SavedPasswordContextProvider({ children }) {
    const [save, setSaved] = useState(false);

    return (
        <SavedContext.Provider value={{ save, setSaved }}>
            {children}
        </SavedContext.Provider>
    )
}