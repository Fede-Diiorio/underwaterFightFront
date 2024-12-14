import { createContext, useContext } from "react";

const LocalStorageContext = createContext({
    saveSubmarineToLocalStorage: () => { },
    getSubmarineFromLocalStorage: () => { },
    clearSubmarineFromLocalStorage: () => { }
});

export const LocalStorageProvider = ({ children }) => {
    const saveSubmarineToLocalStorage = (coordinates, counter) => {
        // Crear el objeto submarino con las propiedades solicitadas
        const submarine = {
            coordinates: {
                width: coordinates.width,
                height: coordinates.height,
                deep: coordinates.deep,
            },
            counter, // Número de disparos o cualquier contador relevante
        };

        // Guardar el submarino como un único objeto en localStorage
        localStorage.setItem("submarine", JSON.stringify(submarine));
    };

    const getSubmarineFromLocalStorage = () => {
        // Recuperar el objeto submarino desde localStorage
        const submarine = JSON.parse(localStorage.getItem("submarine"));
        return submarine || null; // Retorna null si no existe ningún submarino
    };

    const clearSubmarineFromLocalStorage = () => {
        // Limpia el submarino almacenado
        localStorage.removeItem("submarine");
    };

    return (
        <LocalStorageContext.Provider
            value={{
                saveSubmarineToLocalStorage,
                getSubmarineFromLocalStorage,
                clearSubmarineFromLocalStorage,
            }}
        >
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = () => {
    return useContext(LocalStorageContext);
};
