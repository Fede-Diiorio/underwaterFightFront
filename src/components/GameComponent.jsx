import React, { useState } from 'react';
import { useFightService } from '../hooks/FightServiceContext';

const GameComponent = () => {
    const fightService = useFightService();
    const [coordinates, setCoordinates] = useState(null); // Coordenadas generadas
    const [input, setInput] = useState({ width: 0, height: 0, deep: 0 }); // Valores ingresados por el usuario
    const [message, setMessage] = useState(''); // Mensaje general
    const [ranges, setRanges] = useState({ width: '', height: '', deep: '' }); // Rangos devueltos por el backend

    const handleGenerate = () => {
        const generated = fightService.generateRandomCoordinates();
        setCoordinates(generated);
        setMessage('¡Submarino detectado! Hora del combate.');
        setRanges({ width: '', height: '', deep: '' }); // Resetear rangos
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
                setRanges({ width: '', height: '', deep: '' }); // Si gana, no hay rangos que mostrar
            } else {
                setMessage(result.info);
                setRanges({
                    width: result.width,
                    height: result.height,
                    deep: result.deep
                });
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className='container'>
            <h1>Batalla Submarina</h1>
            <button onClick={handleGenerate}>Esconder Submarino</button>
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
                <button onClick={handleCalculate}>Disparar</button>
            </div>
            {message && <p>{message}</p>}
            <div>
                <h3>Sonar:</h3>
                <p>Width: {ranges.width}</p>
                <p>Height: {ranges.height}</p>
                <p>Deep: {ranges.deep}</p>
            </div>
        </div>
    );
};

export default GameComponent;
