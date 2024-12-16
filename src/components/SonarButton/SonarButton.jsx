import classes from './SonarButton.module.scss';

const SonarButton = ({ handleGenerate }) => {
    return <button onClick={handleGenerate} className={classes.button}>
        Activar Sonar
    </button>;
};

export default SonarButton;
