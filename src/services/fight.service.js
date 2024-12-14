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
