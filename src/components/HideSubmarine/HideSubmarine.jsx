import classes from './HideSubmarine.module.scss';
import { generateRandomCoordinates } from '../../services/fight.service';
import { useLocalStorage } from '../../hooks/LocalStorageContext';

const HideSubmarine = () => {

    const { saveSubmarineToLocalStorage } = useLocalStorage();

    const hideHander = () => {
        const submarine = generateRandomCoordinates();
        saveSubmarineToLocalStorage(submarine.coordinates, submarine.counter);
    }

    return (
        <div className='container'>
            <button onClick={hideHander} className={classes.button}>Esconder Submarino</button>
        </div>
    );
};

export default HideSubmarine;
