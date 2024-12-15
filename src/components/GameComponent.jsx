import React, { useState } from 'react';
import { useFightService } from '../hooks/FightServiceContext';

const GameComponent = () => {
    const fightService = useFightService();
    const [coordinates, setCoordinates] = useState(null);
    const [input, setInput] = useState({ width: 0, height: 0, deep: 0 });
    const [message, setMessage] = useState('');

    const handleGenerate = () => {
        const generated = fightService.generateRandomCoordinates();
        setCoordinates(generated);
        setMessage('¡Nuevas coordenadas generadas! Adivina.');
    };

    const handleCalculate = () => {
        try {
            const result = fightService.calculateCoordinates(
                input.width,
                input.height,
                input.deep
            );
            if (typeof result === 'string') {
                setMessage(result);
            } else {
                setMessage(result.info);
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Juego de Coordenadas</h1>
            <button onClick={handleGenerate}>Generar Coordenadas</button>
            {coordinates && <p>Coordenadas generadas: {JSON.stringify(coordinates)}</p>}
            <div>
                <input
                    type="number"
                    placeholder="Width"
                    value={input.width}
                    onChange={(e) => setInput({ ...input, width: Number(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Height"
                    value={input.height}
                    onChange={(e) => setInput({ ...input, height: Number(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Deep"
                    value={input.deep}
                    onChange={(e) => setInput({ ...input, deep: Number(e.target.value) })}
                />
                <button onClick={handleCalculate}>Calcular</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default GameComponent;
