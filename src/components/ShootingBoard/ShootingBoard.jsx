import classes from './ShootingBoard.module.scss'
import { useLocalStorage } from '../../hooks/LocalStorageContext';
import { useState } from 'react';
import { shootHandler } from '../../services/fight.service'

const ShootingBoard = () => {

    const [deep, setDeep] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const { getSubmarineFromLocalStorage } = useLocalStorage();

    const handleHeightChange = (e) => {
        setHeight(Number(e.target.value));
    };

    const handleWidthChange = (e) => {
        setWidth(Number(e.target.value));
    };

    const handleDeepChange = (e) => {
        setDeep(Number(e.target.value));
    };


    const handleShoot = (width, height, deep) => {
        const submarine = getSubmarineFromLocalStorage();
        shootHandler(width, height, deep, submarine[0]);
    }

    return (
        <div className='container'>
            <div className={classes.field}>
                <label>Ancho:</label>

                <input type="number" value={width} onChange={handleWidthChange} />
            </div>

            <div className={classes.field}>
                <label>Altura:</label>

                <input type="number" value={height} onChange={handleHeightChange} />
            </div>

            <div className={classes.field}>
                <label>Profundidad:</label>

                <input type="number" value={deep} onChange={handleDeepChange} />
            </div>

            <button onClick={() => handleShoot(width, height, deep)}>Disparar</button>
        </div>
    );
};

export default ShootingBoard;