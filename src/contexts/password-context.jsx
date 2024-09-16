import { useState, createContext } from "react";

export const PasswordContext = createContext(null);

export default function PasswordContextProvider({children}) {
    const [password, setPassword] = useState('');
    return (
        <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
        </PasswordContext.Provider>
    )
}