export const generateRandomCoordinates = () => {

    const coordinates = {
        width: Math.floor(Math.random() * 100),
        height: Math.floor(Math.random() * 100),
        deep: Math.floor(Math.random() * 100),
    };

    console.log(coordinates);

    let counter = 7;

    return { coordinates, counter };
}

const validateCoordinate = (coordinate) => {
    if (coordinate < 0 || coordinate > 99) {
        console.log(`Coordenada ${coordinate} debe estar dentro del rango de 0 y 99`);
    }
}

export const shootHandler = (width, height, deep, submarine) => {

    if (!submarine) {
        console.log("No hay submarinos cerca");
    }

    validateCoordinate(width);
    validateCoordinate(height);
    validateCoordinate(deep);

    if (width === submarine.coordinates.width && height === submarine.coordinates.height && deep === submarine.coordinates.deep) {
        submarine.counter = null;
        submarine.coordinates = null;
        console.log("¡VICTORIA, ALCANZAMOS LA VICTORIA!");
    }

    submarine.counter--;

    if (submarine.counter < 1) {
        const response = {
            coordinates: submarine.coordinates,
            message: "Te has quedado sin disparos. Estás muerto."
        };


        console.log(response);
    }

    const response = {
        info: `Disparo fallido. Te quedan ${submarine.counter} disparos`,
        width,
        height,
        deep
    };

    console.log(response);
}