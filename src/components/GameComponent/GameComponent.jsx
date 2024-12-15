import React, { useState } from 'react';
import { useFightService } from '../../hooks/FightServiceContext';
import Sonar from '../Sonar/Sonar';

const GameComponent = () => {
    const fightService = useFightService();
    const [coordinates, setCoordinates] = useState(null); // Coordenadas generadas
    const [input, setInput] = useState({ width: 0, height: 0, deep: 0 }); // Valores ingresados por el usuario
    const [message, setMessage] = useState(''); // Mensaje general
    const [ranges, setRanges] = useState({ width: '', height: '', deep: '' }); // Rangos devueltos por el backend
    const [enemySub, setEnemySub] = useState({ width: '', height: '', deep: '' });

    const handleGenerate = () => {
        const generated = fightService.generateRandomCoordinates();
        setCoordinates(generated);
        setMessage('¡Submarino detectado! Hora del combate.');
        setRanges({ width: '', height: '', deep: '' }); // Resetear rangos
        setEnemySub(null);
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
                setEnemySub(result.enemySub);
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
            <button onClick={handleGenerate}>Activar Sonar</button>
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
            <Sonar ranges={ranges} enemySub={enemySub} />
        </div>
    );
};

export default GameComponent;
