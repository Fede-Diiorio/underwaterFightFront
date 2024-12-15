import React, { createContext, useContext, useState } from 'react';
import FightService from '../services/fight.service'; // Importa tu clase aquí

const FightServiceContext = createContext(null);

export const FightServiceProvider = ({ children }) => {
    const fightService = new FightService();
    return (
        <FightServiceContext.Provider value={fightService}>
            {children}
        </FightServiceContext.Provider>
    );
};

export const useFightService = () => {
    const context = useContext(FightServiceContext);
    if (!context) {
        throw new Error("useFightService debe usarse dentro de un FightServiceProvider");
    }
    return context;
};
