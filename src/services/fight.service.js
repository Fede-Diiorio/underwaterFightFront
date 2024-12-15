export default class FightService {
    #coordinates;
    #counter;

    constructor() {
        this.#coordinates = null; // Inicialmente sin coordenadas
        this.#counter = null;

        // Rango inicial para cada dimensión
        this.min = { width: 0, height: 0, deep: 0 };
        this.max = { width: 99, height: 99, deep: 99 };

        // Historial de intentos
        this.history = { width: [], height: [], deep: [] };
    }

    generateRandomCoordinates() {
        this.#reset();

        this.#coordinates = {
            width: Math.floor(Math.random() * 100),
            height: Math.floor(Math.random() * 100),
            deep: Math.floor(Math.random() * 100),
        };

        this.#counter = 7;

        return this.#coordinates;
    }

    getCoordinates() {
        if (!this.#coordinates) {
            throw new Error("Las coordenadas no han sido generadas aún.");
        }
        return this.#coordinates;
    }

    #validateCoordinate(coordinate) {
        if (coordinate < 0 || coordinate > 99) {
            throw new Error(`Coordenada ${coordinate} debe estar dentro del rango de 0 y 99`);
        }
    }

    #getRange(dimension) {
        return `${this.min[dimension]} < número < ${this.max[dimension]}`;
    }

    /**
     * Actualiza los límites del rango para una dimensión específica.
     * @param {string} dimension - La dimensión ('width', 'height' o 'deep').
     * @param {number} number - El número ingresado.
     */
    #updateRange(dimension, number) {
        this.#validateCoordinate(number);

        this.history[dimension].push(number);

        // Ajustar los límites
        if (number < this.#coordinates[dimension]) {
            this.min[dimension] = number;
        } else {
            this.max[dimension] = number;
        }

        return this.#getRange(dimension);
    }

    #generateResponse(coordinate, constructorOption, dimension) {
        if (coordinate != constructorOption) {
            return this.#updateRange(dimension, coordinate);
        } else {
            return `${coordinate} es correcto.`;
        }
    }

    #reset() {
        this.min = { width: 0, height: 0, deep: 0 };
        this.max = { width: 99, height: 99, deep: 99 };
        this.history = { width: [], height: [], deep: [] };
        this.#counter = null;
        this.#coordinates = null;
    }

    calculateCoordinates(width, height, deep) {
        if (!this.#coordinates) {
            throw new Error("Debe generar las coordenadas primero.");
        }

        this.#validateCoordinate(width);
        this.#validateCoordinate(height);
        this.#validateCoordinate(deep);

        const { width: targetWidth, height: targetHeight, deep: targetDeep } = this.#coordinates;

        if (width === targetWidth && height === targetHeight && deep === targetDeep) {
            this.#counter = null;
            this.#coordinates = null;
            return "¡VICTORIA, ALCANZAMOS LA VICTORIA!";
        }

        this.#counter--;

        if (this.#counter < 1) {
            const response = {
                coordinates: this.#coordinates,
                message: "Te has quedado sin disparos. Estás muerto."
            };

            this.#reset();

            return response;
        }

        const response = {
            info: `Disparo fallido. Te quedan ${this.#counter} disparos`,
            width: this.#generateResponse(width, targetWidth, "width"),
            height: this.#generateResponse(height, targetHeight, "height"),
            deep: this.#generateResponse(deep, targetDeep, "deep")
        };

        return response;
    }
}
