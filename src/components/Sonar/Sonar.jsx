import classes from './Sonar.module.scss';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/LocalStorageContext';

const Sonar = () => {
    const [sub, setSub] = useState();
    const { getSubmarineFromLocalStorage } = useLocalStorage();

    const submarine = getSubmarineFromLocalStorage();
    setSub(submarine);

    return (
        <div>
            <h2>Información</h2>
            {/* <h3>{submarine.coordinates}</h3> */}
        </div>
    );
};

export default Sonar;