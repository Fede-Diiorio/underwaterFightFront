const Sonar = ({ enemySub, ranges }) => {
    if (enemySub) {
        return (
            <div className="container">
                <h3>El enemigo disparó desde: </h3>
                <p>Deep: {enemySub.deep}</p>
                <p>Width: {enemySub.width}</p>
                <p>Height: {enemySub.height}</p>
            </div>
        );
    }
    return (
        <div>
            <h3>Sonar:</h3>
            <p>Width: {ranges.width}</p>
            <p>Height: {ranges.height}</p>
            <p>Deep: {ranges.deep}</p>
        </div>
    )



};

export default Sonar;