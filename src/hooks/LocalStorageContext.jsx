import { createContext, useContext } from "react";

const LocalStorageContext = createContext({
    saveSubmarineToLocalStorage: () => { },
    getSubmarineFromLocalStorage: () => { },
    clearSubmarineFromLocalStorage: () => { }
})

export const LocalStorageProvider = ({ children }) => {

    const saveSubmarineToLocalStorage = (saveSub) => {

        let submarine = JSON.parse(localStorage.getItem('submarine')) || [];

        submarine.push(saveSub);
        localStorage.setItem('submarine', JSON.stringify(submarine));

    }

    const getSubmarineFromLocalStorage = () => {
        const submarine = JSON.parse(localStorage.getItem('submarine')) || [];
        console.log(submarine);
        return submarine;
    }

    const clearSubmarineFromLocalStorage = () => {
        localStorage.setItem('submarine', JSON.stringify([]))
    }

    return (
        <LocalStorageContext.Provider value={{ saveSubmarineToLocalStorage, getSubmarineFromLocalStorage, clearSubmarineFromLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    )

}

export const useLocalStorage = () => {
    return useContext(LocalStorageContext)
}